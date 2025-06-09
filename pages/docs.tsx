import Head from 'next/head'
import DocsTabs from '../components/DocsTabs'

export default function Docs() {
  return (
    <>
      <Head>
        <title>التوثيق - TARBOO</title>
        <meta name="description" content="شرح استخدام الواجهة البرمجية" />
      </Head>
      <DocsTabs />
    </>
  )
}
