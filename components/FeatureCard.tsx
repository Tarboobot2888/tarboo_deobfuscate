import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  title: string
  desc: string
  icon: ReactNode
}

export default function FeatureCard({ title, desc, icon }: Props) {
  return (
    <motion.div
      className="rounded-2xl p-6 bg-background/80 backdrop-blur shadow-xl hover:scale-105 transition-transform cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.08 }}
    >
      <div className="flex items-center mb-2">{icon}</div>
      <h3 className="font-heading text-primary text-xl mb-1">{title}</h3>
      <p className="text-text-main text-sm">{desc}</p>
    </motion.div>
  )
}
