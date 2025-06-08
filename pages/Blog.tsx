import Link from 'next/link'

export default function Blog() {
  return (
    <main className="container">
      <h1>المدونة</h1>
      <article>
        <h2>مرحبًا بكم</h2>
        <p>هنا ستجد مقالات عن التشفير وفك التشفير.</p>
      </article>
      <p>
        <Link href="/">العودة إلى الصفحة الرئيسية</Link>
      </p>
    </main>
  )
}
