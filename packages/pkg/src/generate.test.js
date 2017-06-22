import generate from './generate'

describe('generate', () => {
  const tempaltesList = [
    {name: 'Node.js', template: 'Node'}
  ]

  const gitignore = '### Node.js ###\n\n' +
                    '# Logs\n' +
                    'logs\n' +
                    '*.log\n' +
                    'npm-debug.log*\n' +
                    'yarn-debug.log*\n' +
                    'yarn-error.log*'

  it('produces a gitignore string from given templates list', async () => {
    expect(await generate(tempaltesList))
      .toEqual(expect.stringContaining(gitignore))
  })
})
