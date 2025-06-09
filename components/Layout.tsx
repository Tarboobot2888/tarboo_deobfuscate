import Link from 'next/link'
import { ReactNode } from 'react'
import { Github, Twitter } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'
import DevCard from './DevCard'

interface Props { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="backdrop-blur bg-background/60 sticky top-0 z-10 shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="font-heading text-2xl text-primary">TARBOO</Link>
          <nav className="flex gap-6 items-center text-text-main">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <Link href="/editor" className="hover:text-primary">المحرر</Link>
            <Link href="/algorithms" className="hover:text-primary">الخوارزميات</Link>
            <Link href="/docs" className="hover:text-primary">التوثيق</Link>
            <ThemeSwitcher />
          </nav>
        </div>
        <p className="text-center text-sm text-text-main mt-2">كل شيفرة تُفك هنا… تكتب لنفسها حياة جديدة.</p>
      </header>
      <main className="flex-1 container mx-auto p-6 space-y-10">
        {children}
        <DevCard />
      </main>
      <footer className="bg-background/80 backdrop-blur text-text-main p-4 text-center space-y-3">
        <div className="flex justify-center gap-4">
          <a href="https://github.com" aria-label="GitHub" className="hover:text-primary"><Github size={20} /></a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-primary"><Twitter size={20} /></a>
        </div>
        <p>© {new Date().getFullYear()} TARBOO</p>
      </footer>
    </div>
  )
}
