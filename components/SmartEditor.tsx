import dynamic from 'next/dynamic'
import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { javascript } from '@codemirror/lang-javascript'
import toast from 'react-hot-toast'
import { useTheme } from '../context/ThemeContext'
import { themes } from '../styles/themes'

const CodeMirror = dynamic(() => import('@uiw/react-codemirror'), { ssr: false })

export default function SmartEditor() {
  const { theme } = useTheme()
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
      <CodeMirror
        value={code}
        height="200px"
        theme={themes[theme].editor}
        extensions={[javascript()]}
        onChange={v => setCode(v)}
      />
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="bg-primary text-background px-4 py-2 rounded-full shadow hover:shadow-lg transition"
        onClick={handle}
        disabled={!code || loading}
      >
        {loading ? '...' : 'فك التشفير'}
      </motion.button>
      {result && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-background/80 backdrop-blur p-4 rounded-2xl shadow space-y-2"
        >
          <button
            onClick={() => {
              navigator.clipboard.writeText(result)
              toast('تم النسخ!')
            }}
            className="ml-auto block bg-primary text-background px-2 py-1 rounded"
          >
            نسخ النتيجة
          </button>
          <CodeMirror
            value={result}
            height="200px"
            theme={themes[theme].editor}
            extensions={[javascript()]}
            readOnly
          />
        </motion.div>
      )}
    </div>
  )
}
