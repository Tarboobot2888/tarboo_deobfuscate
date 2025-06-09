import { Shield, Sparkles } from 'lucide-react'
import FeatureCard from './FeatureCard'

const features = [
  { title: 'أمان تام', desc: 'تشغيل الخوارزميات في بيئة معزولة', icon: <Shield className="text-primary" /> },
  { title: 'نتائج دقيقة', desc: 'اكتشاف تلقائي لأنواع التشفير', icon: <Sparkles className="text-primary" /> },
]

export default function FeaturesSection() {
  return (
    <section className="py-12">
      <div className="container grid gap-6 md:grid-cols-2">
        {features.map(f => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}
