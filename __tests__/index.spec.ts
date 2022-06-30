import { describe, expect, it } from 'vitest'

import hello from '../src/index'

describe('index', () => {
  it('should work', () => {
    expect(true).toBe(true)
  })

  it('should return correct src', () => {
    const result = hello()

    expect(result).toBe('Hello, World!')
  })
})
