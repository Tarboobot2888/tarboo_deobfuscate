// pages/_app.tsx
import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/ThemeContext'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster position="top-center" />
      </Layout>
    </ThemeProvider>
  )
}
