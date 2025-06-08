import Link from 'next/link'

export default function Docs() {
  return (
    <main className="container">
      <h1>التوثيق</h1>
      <p>يشرح هذا القسم كيفية استخدام أداة فك التشفير.</p>
      <ul>
        <li>ضع الكود في المحرر الأيسر</li>
        <li>اضغط "فك التشفير" وشاهد النتائج في الوسط</li>
        <li>استخدم التحليل لعرض الإحصائيات</li>
      </ul>
      <p>
        <Link href="/">العودة إلى الصفحة الرئيسية</Link>
      </p>
    </main>
  )
}
