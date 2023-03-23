import {replaceProperty} from './replace-property'

describe('Replace Property', () => {
  it('should replace a property', () => {
    const object = {
      prop: 'value',
      changed: 'string'
    }

    const newObject = replaceProperty(object, 'changed', () => false)

    expect(newObject.changed).toBe(false)

    const appendedObject = replaceProperty(object, 'changed', v => `${v}s`)

    expect(appendedObject.changed).toBe('strings')
  })
})
