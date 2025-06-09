import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="text-center py-20 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-heading mb-6"
      >
        فك التشفير... برؤية جديدة، أناقة الكود وأمانه.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/editor" className="bg-primary text-background px-8 py-3 rounded-2xl shadow hover:scale-105 transition-transform">
          جرّب الآن
        </Link>
      </motion.div>
    </section>
  )
}
