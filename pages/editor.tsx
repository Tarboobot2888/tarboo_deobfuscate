import { useState } from 'react'
import axios from 'axios'

export default function Editor() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  async function handle() {
    setLoading(true)
    const res = await axios.post('/api/deobfuscate', { code })
    setResult(res.data.result)
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-60 p-3 border rounded-md font-mono"
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="أدخل الكود المشفر هنا"
      />
      <button
        onClick={handle}
        disabled={!code.trim() || loading}
        className="bg-primary text-white px-4 py-2 rounded-md"
      >
        {loading ? 'جارٍ المعالجة...' : 'فك التشفير التلقائي'}
      </button>
      {result && (
        <div className="space-y-2">
          <pre className="bg-neutral p-3 rounded-md whitespace-pre-wrap">{result}</pre>
          <button
            onClick={() => navigator.clipboard.writeText(result)}
            className="bg-secondary text-black px-3 py-1 rounded-md"
          >
            نسخ
          </button>
        </div>
      )}
    </div>
  )
}
