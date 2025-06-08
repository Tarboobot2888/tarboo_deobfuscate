import Link from 'next/link'

export default function Contact() {
  return (
    <main className="container">
      <h1>تواصل معنا</h1>
      <form className="contact-form">
        <input type="text" placeholder="اسمك" required />
        <textarea placeholder="رسالتك" required />
        <button type="submit">إرسال</button>
      </form>
      <p>
        أو تواصل مباشرة عبر{' '}
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          واتساب
        </a>
      </p>
      <p>
        <Link href="/">العودة إلى الصفحة الرئيسية</Link>
      </p>
    </main>
  )
}
