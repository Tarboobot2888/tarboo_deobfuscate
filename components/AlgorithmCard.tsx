import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  name: string
  desc: string
  children?: ReactNode
}

export default function AlgorithmCard({ name, desc, children }: Props) {
  return (
    <motion.div
      className="p-4 bg-background/80 backdrop-blur rounded-2xl shadow hover:scale-105 transition-transform"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-heading text-primary mb-1">{name}</h3>
      <p className="text-sm mb-2">{desc}</p>
      {children}
    </motion.div>
  )
}
