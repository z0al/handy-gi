import { join } from 'path'
import main from './main'

const rootDir = join(__dirname, '..')

describe('main', () => {
  const gitignore = '### Node.js ###\n\n' +
                    '# Logs\n' +
                    'logs\n' +
                    '*.log\n' +
                    'npm-debug.log*\n' +
                    'yarn-debug.log*\n' +
                    'yarn-error.log*'
  it('throws an error if the path is invalid directory', async () => {

  })

  it('produces a gitignore string from given path', async () => {
    expect(await main(rootDir))
      .toEqual(expect.stringContaining(gitignore))
  })
})
