export function deobfuscate(code: string): string { return code.split(';').join(';\n') }
