import {describe, it, expect} from '@jest/globals'
import {nameString} from 'lib/components/example'

describe('name function', function () {
  it('should return a string with name input', function () {
    const name = 'John Doe'
    expect(nameString(name)).toBe('My name is John Doe')
  })
})
