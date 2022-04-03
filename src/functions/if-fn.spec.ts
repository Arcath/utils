import {ifFn} from '../index'
import {hasDevDependency} from './package'

describe('If FN', () => {
  it('should return the correct result', () => {
    const testFn = ifFn((result: boolean) => result)

    expect(testFn(true, 'pass', 'fail')).toBe('pass')
    expect(testFn(false, 'fail', 'pass')).toBe('pass')

    const ifDevDep = ifFn((dep: string) => {
      return hasDevDependency(
        {
          name: 'sample',
          version: '1.2.3',
          readme: '',
          _id: '1',
          devDependencies: {react: '17.0.1'}
        },
        dep
      )
    })

    expect(ifDevDep('react', true, false)).toBeTruthy()
  })
})
