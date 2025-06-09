import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center gap-6 max-w-4xl">
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading"
          >
            فك التشفير... برؤية جديدة، أناقة الكود وأمانه.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/editor"
              className="bg-primary text-background px-8 py-3 rounded-2xl shadow hover:scale-105 transition-transform inline-block"
            >
              جرّب الآن
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
