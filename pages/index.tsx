// pages/index.tsx
import { useState, useEffect } from "react";
import { deobfuscateLocal } from "../lib/webcrack-wrapper";
import axios from "axios";
import Link from "next/link";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";

export default function Home() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<{before:{vars:number,funcs:number},after:{vars:number,funcs:number}} | null>(null);

  function getStats(str: string) {
    const vars = (str.match(/\b(var|let|const)\b/g) || []).length;
    const funcs = (str.match(/\bfunction\b|=>/g) || []).length;
    return { vars, funcs };
  }

  // سجل الاستخدام في localStorage
  useEffect(() => {
    if (output) {
      const history = JSON.parse(localStorage.getItem("history") || "[]");
      localStorage.setItem(
        "history",
        JSON.stringify([{ input: code, output, method: 'local', timestamp: Date.now() }, ...history].slice(0, 30))
      );
    }
  }, [output]);

  async function handleDecode() {
    setError(null);
    setOutput("");
    setLoading(true);
    setStats({ before: getStats(code), after: { vars: 0, funcs: 0 } });
    try {
      const response = await axios.post("/api/deobfuscate-local", { code });
      setOutput(response.data.decoded);
      setStats({ before: getStats(code), after: getStats(response.data.decoded) });
    } catch (e: any) {
      setError(e.message || "حدث خطأ أثناء فك التشفير");
    }
    setLoading(false);
  }

  async function handleBeautify() {
    try {
      const formatted = await prettier.format(code, {
        parser: 'babel',
        plugins: [parserBabel]
      });
      setCode(formatted);
    } catch (e) {
      console.error(e);
    }
  }

  function onDrop(e: React.DragEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (typeof ev.target?.result === 'string') setCode(ev.target.result);
      };
      reader.readAsText(file);
    }
  }

  return (
    <main className="container">
      <header>
        <h1>TARBOO Deobfuscate</h1>
        <nav>
          <Link href="/history">سجل الاستخدام</Link>
        </nav>
      </header>

      <section>
        <div className="editor-grid">
          <div>
            <label>الكود الأصلي</label>
            <textarea
              className="code-input"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
              placeholder="أدخل أو أسقط ملف الكود هنا"
              rows={15}
            />
            <button onClick={handleBeautify} disabled={!code.trim()}>تنظيف الكود</button>
          </div>

          <div>
            <label>النتيجة المفكوكة</label>
            <pre className="code-output">{output || '...'}</pre>
          </div>

          <div>
            <label>التحليل</label>
            <pre className="code-output">
              {stats
                ? `المتغيرات قبل: ${stats.before.vars}\nالدوال قبل: ${stats.before.funcs}\n\nالمتغيرات بعد: ${stats.after.vars}\nالدوال بعد: ${stats.after.funcs}`
                : '...'}
            </pre>
          </div>
        </div>

        <p className="method-info">فك تشفير محلي سريع بدون إنترنت</p>

        <button onClick={handleDecode} disabled={loading || !code.trim()}>
          {loading ? "جاري فك التشفير..." : "فك التشفير"}
        </button>

        {error && <p className="error">{error}</p>}
      </section>
    </main>
  );
}
