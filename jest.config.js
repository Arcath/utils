import configs from 'kcd-scripts/config.js'

const config = Object.assign(configs.jest, {
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true
      }
    ]
  },
  collectCoverage: true,
  extensionsToTreatAsEsm: ['.ts']
})

export default config
