import { info, match } from './node'

describe('Node.js', () => {
  it('has "Node.js" as a name', () => {
    expect(info.name).toEqual('Node.js')
  })

  it('has "Node" as a template name', () => {
    expect(info.template).toEqual('Node')
  })

  it('matches only when a package.json exists', async () => {
    const files = ['package.json']
    expect(await match(files)).toEqual(true)

    const fake = ['.pachage.json', 'fakepackage.json', 'pachage.jso']
    expect(await match(fake)).toEqual(false)
  })
})
