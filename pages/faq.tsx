import Head from 'next/head'
import FAQAccordion from '../components/FAQAccordion'

export default function Faq() {
  return (
    <>
      <Head>
        <title>أسئلة شائعة - TARBOO</title>
        <meta name="description" content="إجابات لأكثر الأسئلة" />
      </Head>
      <FAQAccordion />
    </>
  )
}
