import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export default function DocsTabs() {
  return (
    <Tabs className="w-full">
      <TabsList className="flex gap-2 mb-4">
        <TabsTrigger value="curl" className="px-3 py-1 bg-background rounded">curl</TabsTrigger>
        <TabsTrigger value="js" className="px-3 py-1 bg-background rounded">JS</TabsTrigger>
      </TabsList>
      <TabsContent value="curl">
        <pre className="bg-background p-3 rounded">curl -X POST /api/deobfuscate</pre>
      </TabsContent>
      <TabsContent value="js">
        <pre className="bg-background p-3 rounded">fetch('/api/deobfuscate')</pre>
      </TabsContent>
    </Tabs>
  )
}
