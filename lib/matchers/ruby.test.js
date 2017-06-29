import { info, match } from './ruby'

describe('Ruby', () => {
  it('has "Ruby" as a name', () => {
    expect(info.name).toEqual('Ruby')
  })

  it('has "Ruby" as a template name', () => {
    expect(info.template).toEqual('Ruby')
  })

  it('matches only when a Gemfile exists in the root', async () => {
    const files = ['Gemfile']
    expect(await match(files)).toEqual(true)

    const fake = ['sub-dir/Gemfile', 'config.ru', 'Gemfile.lock']
    expect(await match(fake)).toEqual(false)
  })
})
