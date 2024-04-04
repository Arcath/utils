/* eslint @typescript-eslint/no-shadow:off */
import path from 'path'

import {expect, it, describe} from 'vitest'

import {
  getPackage,
  hasDependency,
  hasDevDependency,
  hasPeerDependency,
  hasAnyDependency,
  hasScript
} from './package'

describe('Package Fns', () => {
  it('should get the package', () => {
    const {
      pkg,
      pkgPath,
      hasDependency,
      hasDevDependency,
      hasPeerDependency,
      hasAnyDependency,
      ifDependency,
      ifDevDependency,
      ifPeerDependency,
      ifAnyDependency,
      hasScript,
      ifScript
    } = getPackage()

    expect(pkg.name).toBe('@arcath/utils')
    expect(pkgPath).toBe(path.join(process.cwd(), 'package.json'))

    expect(() => getPackage({cwd: '/fake/does/not/exist'})).toThrow(
      'Could not find package.json'
    )

    expect(hasDependency('read-pkg-up')).toBeTruthy()
    expect(hasDependency('electron')).toBeFalsy()
    expect(hasDevDependency('vitest')).toBeTruthy()
    expect(hasPeerDependency('esbuild')).toBeFalsy()
    expect(hasAnyDependency('vitest')).toBeTruthy()
    expect(ifDependency('read-pkg-up', 'pass', 'fail')).toBe('pass')
    expect(ifDevDependency('read-pkg-up', 'pass', 'fail')).toBe('fail')
    expect(ifPeerDependency('read-pkg-up', 'pass', 'fail')).toBe('fail')
    expect(ifAnyDependency('read-pkg-up', 'pass', 'fail')).toBe('pass')

    expect(hasScript('test')).toBeTruthy()
    expect(hasScript('upload')).toBeFalsy()
    expect(ifScript('test', 'pass', 'fail')).toBe('pass')
  })

  it('should find dependencies', () => {
    const pkg = {
      name: 'sample',
      version: '1.2.3',
      readme: '',
      _id: '1',
      devDependencies: {jest: '1.2.3'}
    }

    expect(hasDependency(pkg, 'jest')).toBeFalsy()
    expect(hasDevDependency(pkg, 'jest')).toBeTruthy()
    expect(hasPeerDependency(pkg, 'jest')).toBeFalsy()
    expect(hasAnyDependency(pkg, 'jest')).toBeTruthy()
  })

  it('should find scripts', () => {
    const pkg = {
      name: 'sample',
      version: '1.2.3',
      readme: '',
      _id: '1',
      devDependencies: {jest: '1.2.3'}
    }

    expect(hasScript(pkg, 'missing')).toBeFalsy()

    expect(hasScript({...pkg, scripts: {run: 'launch'}}, 'run')).toBeTruthy()
  })
})
