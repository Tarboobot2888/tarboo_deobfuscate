import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center space-y-8 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-poppins font-bold"
      >
        كل سطر هنا يعيد للنور ما خُفي
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="/editor"
          className="px-6 py-3 bg-secondary text-black rounded-md font-bold"
        >
          جرّب الآن
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mx-auto max-w-2xl text-lg"
      >
        <p>الخوارزميات المدعومة: Base64، Eval Unpacker، Humanify</p>
      </motion.div>
    </div>
  )
}
