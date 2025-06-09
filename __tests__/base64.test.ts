import { describe, it, expect } from 'vitest'
import { deobfuscate } from '../lib/deobfuscators/base64'

describe('base64', () => {
  it('decodes string', () => {
    expect(deobfuscate('aGVsbG8=')).toBe('hello')
  })
})
