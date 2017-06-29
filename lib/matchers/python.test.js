import { info, match } from './python'

describe('Python', () => {
  it('has "Python" as a name', () => {
    expect(info.name).toEqual('Python')
  })

  it('has "Python" as a template name', () => {
    expect(info.template).toEqual('Python')
  })

  it('matches only when a requirements.txt exists at the root', async () => {
    const files = ['requirements.txt']
    expect(await match(files)).toEqual(true)

    const fake = ['sub-dir/requirements.txt', 'Procfile', '__init__.py']
    expect(await match(fake)).toEqual(false)
  })
})
