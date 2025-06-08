import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'

export default function Landing() {
  return (
    <main className="start-page">
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Logo />
        <h1>TARBOO Deobfuscate</h1>
        <p>أداة لفك تشفير الأكواد محليًا</p>
        <Link href="/workspace" className="start-btn">
          ابدأ
        </Link>
      </motion.div>
    </main>
  )
}
