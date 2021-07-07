import readPkg from 'read-pkg-up'

import {defaults} from './defaults'
import {ifFn} from './if-fn'
import {keys} from './keys'

export interface PackageOptions {
  cwd: string
}

/**
 * Does the given dependency exist in package.json
 */
export type HasDependency = (dep: string) => boolean

export type IfDependency = <Truthy, Falsy>(
  dep: string,
  truthy: Truthy,
  falsy: Falsy
) => Falsy | Truthy

export interface Package {
  pkg: readPkg.NormalizedPackageJson
  pkgPath: string
  hasDependency: HasDependency
  hasDevDependency: HasDependency
  hasPeerDependency: HasDependency
  hasAnyDependency: HasDependency
  hasScript: (script: string) => boolean
  ifDependency: IfDependency
  ifDevDependency: IfDependency
  ifPeerDependency: IfDependency
  ifAnyDependency: IfDependency
  ifScript: <Truthy, Falsy>(
    script: string,
    truthy: Truthy,
    falsy: Falsy
  ) => Falsy | Truthy
}

const dependencyFunction = (
  key: 'dependencies' | 'devDependencies' | 'peerDependencies'
) => {
  return (pkg: readPkg.NormalizedPackageJson, dep: string) => {
    if (!pkg[key]) {
      return false
    }

    //eslint-disable-next-line
    return keys(pkg[key]!).some(d => d === dep)
  }
}

export const hasDependency = dependencyFunction('dependencies')
export const hasDevDependency = dependencyFunction('devDependencies')
export const hasPeerDependency = dependencyFunction('peerDependencies')

export const hasAnyDependency = (
  pkg: readPkg.NormalizedPackageJson,
  dep: string
) => {
  return [
    hasDependency(pkg, dep),
    hasDevDependency(pkg, dep),
    hasPeerDependency(pkg, dep)
  ].some(r => r)
}

export const hasScript = (
  pkg: readPkg.NormalizedPackageJson,
  script: string
) => {
  if (!pkg.scripts) {
    return false
  }

  return keys(pkg.scripts).includes(script)
}

/**
 * Get the current package.json and provide some helpers for interacting with it.
 *
 * @param options An instance of `PackageOptions` (Optional)
 * @returns
 */
export const getPackage = async (
  options?: Partial<PackageOptions>
): Promise<Package> => {
  const {cwd} = defaults(options, {
    cwd: process.cwd()
  })

  const result = await readPkg({cwd})

  if (typeof result === 'undefined') {
    throw new Error('Could not find package.json')
  }

  const {packageJson: pkg, path: pkgPath} = result

  return {
    pkg,
    pkgPath,
    hasDependency: (dep: string) => hasDependency(pkg, dep),
    hasDevDependency: (dep: string) => hasDevDependency(pkg, dep),
    hasPeerDependency: (dep: string) => hasPeerDependency(pkg, dep),
    hasAnyDependency: (dep: string) => hasAnyDependency(pkg, dep),
    hasScript: (script: string) => hasScript(pkg, script),
    ifDependency: ifFn((dep: string) =>
      hasDependency(pkg, dep)
    ) as IfDependency,
    ifDevDependency: ifFn((dep: string) =>
      hasDevDependency(pkg, dep)
    ) as IfDependency,
    ifPeerDependency: ifFn((dep: string) =>
      hasPeerDependency(pkg, dep)
    ) as IfDependency,
    ifAnyDependency: ifFn((dep: string) =>
      hasAnyDependency(pkg, dep)
    ) as IfDependency,
    ifScript: ifFn((script: string) => hasScript(pkg, script))
  }
}
