import fs from 'fs'

import ls from './ls'
import match from './match'
import generate from './generate'

const main = async (path) => {
  // 1. Is it a file or directory? let's check out
  if (!fs.statSync(path).isDirectory()) {
    throw Error('The path must point to a valid directory')
  }

  // 2. List all folders/files in that directory
  const files = await ls(path)

  // 3. Let's check which matchers match our list
  const matches = await match(files)

  // 4. And finally! let's generate the output
  return generate(matches)
}

export default main
