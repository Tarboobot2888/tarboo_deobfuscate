const algos = [
  {
    name: 'Base64',
    desc: 'تحويل النص المشفر بصيغة Base64 إلى نص عادي',
  },
  {
    name: 'Eval Unpacker',
    desc: 'فك شفرات eval(function(p,a,c,k,e,r)...',
  },
  {
    name: 'Humanify',
    desc: 'تنسيق الكود ليكون مقروءاً بشكل أفضل',
  },
]

export default function Algorithms() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {algos.map(a => (
        <div key={a.name} className="border rounded-md p-4 space-y-2">
          <h3 className="font-poppins font-bold text-lg">{a.name}</h3>
          <p>{a.desc}</p>
          <button className="bg-secondary text-black px-3 py-1 rounded-md">
            تجريب سريع
          </button>
        </div>
      ))}
    </div>
  )
}
