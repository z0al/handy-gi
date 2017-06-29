jest.mock('os')

import { info, match } from './macOS'
import os from 'os'

describe('macOS', () => {
  it('has "macOS" as a name', () => {
    expect(info.name).toEqual('macOS')
  })

  it('has "macOS" as a template name', () => {
    expect(info.template).toEqual('macOS')
  })

  it('matches only when the current OS is macOS', async () => {
    os.__setOS('Darwin')
    expect(await match([])).toEqual(true)

    os.__setOS('other')
    expect(await match([])).toEqual(false)
  })
})
