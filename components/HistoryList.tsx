import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Item {
  input: string
  output: string
  method: string
  timestamp: number
}

export default function HistoryList() {
  const [history, setHistory] = useState<Item[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('history')
    if (saved) setHistory(JSON.parse(saved))
  }, [])

  return (
    <div className="container flex flex-col space-y-4 max-w-3xl">
      {history.map((h, i) => (
        <motion.div
          key={i}
          className="p-4 rounded-2xl bg-background/80 backdrop-blur shadow w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm">{new Date(h.timestamp).toLocaleString()}</p>
          <pre className="whitespace-pre-wrap text-sm w-full overflow-x-auto">{h.output}</pre>
        </motion.div>
      ))}
      {history.length === 0 && <p>لا توجد سجلات.</p>}
    </div>
  )
}
