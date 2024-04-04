import {expect, it, describe} from 'vitest'
import {isEnv} from './is-env'

describe('isEnv', () => {
  it('should get the env', () => {
    expect(isEnv('test')).toBeTruthy()
  })
})
