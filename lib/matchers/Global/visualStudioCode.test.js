jest.mock('command-exists')

import { info, match } from './visualStudioCode'
import cm from 'command-exists'

describe('Visual Studio Code', () => {
  it('has "Visual Studio Code" as a name', () => {
    expect(info.name).toEqual('Visual Studio Code')
  })

  it('has "VisualStudioCode" as a template name', () => {
    expect(info.template).toEqual('VisualStudioCode')
  })

  it('matches only when Visual Studio Code is available in Path', async () => {
    cm.__setCommand('code', true)
    expect(await match([])).toEqual(true)

    cm.__setCommand('code', false)
    expect(await match([])).toEqual(false)
  })
})
