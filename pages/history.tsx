// pages/history.tsx
import { useEffect, useState } from "react";

interface HistoryItem {
  input: string;
  output: string;
  method: string;
  timestamp: number;
}

export default function History() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("history");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  function clearHistory() {
    localStorage.removeItem("history");
    setHistory([]);
  }

  return (
    <div className="space-y-4">
      <h1 className="font-poppins text-2xl font-bold">سجل الاستخدام</h1>
      <div>
        {history.length === 0 && <p>لا توجد سجلات حتى الآن.</p>}

        {history.map((item, idx) => (
          <article key={idx} className="history-item">
            <p><strong>الطريقة:</strong> {item.method}</p>
            <p><strong>التاريخ:</strong> {new Date(item.timestamp).toLocaleString()}</p>
            <details>
              <summary>عرض الكود الأصلي</summary>
              <pre>{item.input}</pre>
            </details>
            <details>
              <summary>عرض النتيجة المفكوكة</summary>
              <pre>{item.output}</pre>
            </details>
          </article>
        ))}

        {history.length > 0 && (
          <button onClick={clearHistory} className="bg-red-600 text-white px-3 py-1 rounded-md">
            مسح السجل
          </button>
        )}
      </div>
    </div>
  );
}
