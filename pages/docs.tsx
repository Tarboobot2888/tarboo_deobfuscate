export default function Docs() {
  return (
    <div className="space-y-4">
      <h1 className="font-poppins text-2xl font-bold">واجهة API</h1>
      <p>أرسل طلب POST إلى <code>/api/deobfuscate</code> مع الحقل <code>code</code>.</p>
      <pre className="bg-neutral p-3 rounded-md whitespace-pre-wrap">
        {`curl -X POST https://example.com/api/deobfuscate -d '{"code":"..."}'`}
      </pre>
    </div>
  )
}
