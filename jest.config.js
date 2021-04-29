const configs = require('kcd-scripts/config')

module.exports = Object.assign(configs.jest, {
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: true
})
