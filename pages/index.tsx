import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <main className="start-page">
      <motion.div
        className="intro"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Logo />
        <h1>TARBOO Deobfuscate</h1>
        <Link href="/workspace" className="start-btn">
          ابدأ
        </Link>
      </motion.div>
    </main>
  )
}
