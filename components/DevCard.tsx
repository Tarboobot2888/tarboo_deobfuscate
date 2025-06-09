import { motion } from 'framer-motion'
import { Github, Twitter } from 'lucide-react'

export default function DevCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-background/80 backdrop-blur rounded-2xl shadow-lg p-4 flex flex-col items-center gap-2"
    >
      <img src="/avatar.png" alt="developer" className="w-20 h-20 rounded-full" />
      <h3 className="font-heading text-xl text-primary">Tarboo Dev</h3>
      <p className="text-text-main text-center text-sm">مهتم بأمان الويب وفك التشفير</p>
      <div className="flex gap-4">
        <a href="https://github.com" aria-label="GitHub" className="hover:text-primary"><Github size={20} /></a>
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-primary"><Twitter size={20} /></a>
      </div>
    </motion.div>
  )
}
