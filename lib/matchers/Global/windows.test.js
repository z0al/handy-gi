jest.mock('os')

import { info, match } from './windows'
import os from 'os'

describe('Windows', () => {
  it('has "Windows" as a name', () => {
    expect(info.name).toEqual('Windows')
  })

  it('has "Windows" as a template name', () => {
    expect(info.template).toEqual('Windows')
  })

  it('matches only when the current OS is Windows', async () => {
    os.__setOS('Windows_NT')
    expect(await match([])).toEqual(true)

    os.__setOS('other')
    expect(await match([])).toEqual(false)
  })
})
