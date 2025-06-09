export function deobfuscate(code: string): string {
  try {
    return Buffer.from(code, 'base64').toString('utf8')
  } catch {
    return code
  }
}
