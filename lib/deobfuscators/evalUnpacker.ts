import { VM } from 'vm2'

export function deobfuscate(code: string): string {
  const vm = new VM({ timeout: 1000 })
  try {
    const result = vm.run(code)
    return typeof result === 'string' ? result : String(result)
  } catch {
    return code
  }
}
