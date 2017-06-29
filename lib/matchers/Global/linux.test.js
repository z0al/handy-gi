jest.mock('os')

import { info, match } from './linux'
import os from 'os'

describe('Linux', () => {
  it('has "Linux" as a name', () => {
    expect(info.name).toEqual('Linux')
  })

  it('has "Linux" as a template name', () => {
    expect(info.template).toEqual('Linux')
  })

  it('matches only when the current OS is Linux', async () => {
    os.__setOS('Linux')
    expect(await match([])).toEqual(true)

    os.__setOS('other')
    expect(await match([])).toEqual(false)
  })
})
