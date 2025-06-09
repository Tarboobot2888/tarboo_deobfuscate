import Link from 'next/link'
import { ReactNode } from 'react'

interface Props { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="font-poppins text-xl font-bold">TARBOO</Link>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">الرئيسية</Link>
            <Link href="/editor" className="hover:underline">المحرر</Link>
            <Link href="/algorithms" className="hover:underline">الخوارزميات</Link>
            <Link href="/docs" className="hover:underline">التوثيق</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto p-4">{children}</main>
      <footer className="bg-gray-900 text-gray-100 p-4 text-center space-y-2">
        <div className="space-x-4">
          <Link href="/">الرئيسية</Link>
          <Link href="/about">من نحن</Link>
          <Link href="/faq">أسئلة شائعة</Link>
          <Link href="/blog">المدونة</Link>
        </div>
        <p>© {new Date().getFullYear()} TARBOO</p>
      </footer>
    </div>
  )
}
