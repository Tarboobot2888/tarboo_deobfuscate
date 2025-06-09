import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  { q: 'كيف أستخدم الموقع؟', a: 'ببساطة الصق الكود واختر فك التشفير.' },
  { q: 'هل الكود آمن؟', a: 'نعم، يتم التنفيذ في خادم معزول.' },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((f, idx) => (
        <div key={idx} className="bg-background/70 rounded-2xl p-4">
          <button
            className="w-full text-left font-heading"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            {f.q}
          </button>
          {open === idx && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-sm">
              {f.a}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  )
}
