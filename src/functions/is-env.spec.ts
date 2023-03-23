import {isEnv} from './is-env'

describe('isEnv', () => {
  it('should get the env', () => {
    expect(isEnv('test')).toBeTruthy()
  })
})
