import {isEnv} from '../'

describe('isEnv', () => {
  it('should get the env', () => {
    expect(isEnv('test')).toBeTruthy()
  })
})
