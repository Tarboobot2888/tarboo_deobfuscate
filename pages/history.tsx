import Head from 'next/head'
import HistoryList from '../components/HistoryList'

export default function History() {
  return (
    <>
      <Head>
        <title>السجل - TARBOO</title>
        <meta name="description" content="سجل الأكواد المفكوكة" />
      </Head>
      <HistoryList />
    </>
  )
}
