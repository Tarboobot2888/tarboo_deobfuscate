import Head from 'next/head'
import AlgorithmCard from '../components/AlgorithmCard'

const algorithms = [
  { name: 'Base64', desc: 'تحويل Base64 إلى نص عادي' },
  { name: 'Eval Unpacker', desc: 'فك eval(function(p,a,c,k,e,r)...' },
  { name: 'Humanify', desc: 'تنسيق الكود ليكون مقروءاً' },
]

export default function Algorithms() {
  return (
    <>
      <Head>
        <title>الخوارزميات - TARBOO</title>
        <meta name="description" content="مكتبة الخوارزميات" />
      </Head>
      <div className="grid md:grid-cols-3 gap-6 py-8">
        {algorithms.map(a => (
          <AlgorithmCard key={a.name} name={a.name} desc={a.desc} />
        ))}
      </div>
    </>
  )
}
