import Head from 'next/head'
import dynamic from 'next/dynamic'

const SmartEditor = dynamic(() => import('../components/SmartEditor'), { ssr: false })

export default function Editor() {
  return (
    <>
      <Head>
        <title>المحرر - TARBOO</title>
        <meta name="description" content="المحرر الذكي" />
      </Head>
      <SmartEditor />
    </>
  )
}
