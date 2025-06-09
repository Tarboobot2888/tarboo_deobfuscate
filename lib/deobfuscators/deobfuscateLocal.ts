import { deobfuscate as b64 } from './base64'
import { deobfuscate as evalUnpack } from './evalUnpacker'
import { deobfuscate as humanify } from './humanify'

export function deobfuscateLocal(code: string): string {
  if (/^[A-Za-z0-9+/=\n]+$/.test(code.trim())) {
    const decoded = b64(code)
    if (decoded !== code) return decoded
  }
  if (/eval\(/.test(code)) {
    const decoded = evalUnpack(code)
    if (decoded !== code) return decoded
  }
  return humanify(code)
}
