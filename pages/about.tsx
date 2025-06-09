import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>من نحن - TARBOO</title>
        <meta name="description" content="حول الموقع" />
      </Head>
      <div className="space-y-4">
        <h1 className="font-heading text-2xl text-primary">من نحن</h1>
        <p>مشروع يهدف إلى تبسيط فك تشفير الأكواد مع الحفاظ على الأمان.</p>
      </div>
    </>
  )
}
