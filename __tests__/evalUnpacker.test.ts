import { describe, it, expect } from 'vitest'
import { deobfuscate } from '../lib/deobfuscators/evalUnpacker'

describe('evalUnpacker', () => {
  it('executes simple eval code', () => {
    expect(deobfuscate('"test"')).toBe('test')
  })
})
