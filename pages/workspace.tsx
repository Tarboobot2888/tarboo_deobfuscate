// pages/workspace.tsx
import { useState, useEffect, DragEvent } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import axios from "axios";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeContext";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function Workspace() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState({
    orig: { lines: 0, vars: 0, funcs: 0 },
    deob: { lines: 0, vars: 0, funcs: 0 },
  });
  const { theme, toggle } = useTheme();

  // سجل الاستخدام في localStorage
  useEffect(() => {
    if (output) {
      const history = JSON.parse(localStorage.getItem("history") || "[]");
      localStorage.setItem(
        "history",
        JSON.stringify(
          [
            { input: code, output, method: "local", timestamp: Date.now() },
            ...history,
          ].slice(0, 30),
        ),
      );
    }
  }, [output]);

  useEffect(() => {
    function analyze(text: string) {
      return {
        lines: text.split(/\r?\n/).length,
        vars: (text.match(/\b(?:var|let|const)\b/g) || []).length,
        funcs: (text.match(/\bfunction\b|=>/g) || []).length,
      };
    }
    setAnalysis({ orig: analyze(code), deob: analyze(output) });
  }, [code, output]);

  async function handleDecode() {
    setError(null);
    setOutput("");
    setLoading(true);
    try {
      const response = await axios.post("/api/deobfuscate-local", { code });
      setOutput(response.data.decoded);
    } catch (e: any) {
      setError(e.message || "حدث خطأ أثناء فك التشفير");
    }
    setLoading(false);
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      file.text().then(setCode);
    }
  }

  async function beautify() {
    try {
      const formatted = await prettier.format(code, {
        parser: "babel",
        plugins: [parserBabel],
      });
      setCode(formatted);
    } catch {}
  }

  function download() {
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "deobfuscated.js");
  }

  return (
    <main
      className="container"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <header className="header">
        <h1>
          <Link href="/">TARBOO Deobfuscate</Link>
        </h1>
        <div className="actions">
          <Link href="/history">سجل الاستخدام</Link>
          <button onClick={toggle} className="toggle-btn">
            وضع {theme === "dark" ? "فاتح" : "مظلم"}
          </button>
        </div>
      </header>

      <motion.section
        className="grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="column">
          <h2>الكود الأصلي</h2>
          <MonacoEditor
            language="javascript"
            value={code}
            onChange={(v) => setCode(v || "")}
            options={{ minimap: { enabled: false } }}
          />
          <button onClick={beautify}>تنظيف الكود</button>
        </div>

        <div className="column">
          <h2>بعد الفك</h2>
          <MonacoEditor
            language="javascript"
            value={output}
            options={{ readOnly: true, minimap: { enabled: false } }}
          />
          <button onClick={download} disabled={!output}>
            تحميل الناتج
          </button>
        </div>

        <div className="column analysis">
          <h2>التحليل</h2>
          <ul>
            <li>
              الأسطر: {analysis.orig.lines} → {analysis.deob.lines}
            </li>
            <li>
              المتغيرات: {analysis.orig.vars} → {analysis.deob.vars}
            </li>
            <li>
              الدوال: {analysis.orig.funcs} → {analysis.deob.funcs}
            </li>
          </ul>
          <button onClick={handleDecode} disabled={loading || !code.trim()}>
            {loading ? "جاري الفك..." : "فك التشفير"}
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      </motion.section>
      <p className="privacy">كل المعالجة تتم محليًا في المتصفح ولا يتم رفع الكود للخادم.</p>
    </main>
  );
}
