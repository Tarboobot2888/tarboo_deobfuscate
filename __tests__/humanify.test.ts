import { describe, it, expect } from 'vitest'
import { deobfuscate } from '../lib/deobfuscators/humanify'

describe('humanify', () => {
  it('adds newlines after semicolons', () => {
    expect(deobfuscate('a;b')).toBe('a;\nb')
  })
})
