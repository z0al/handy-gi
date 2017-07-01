const fs = jest.genMockFromModule('fs')

let __files = []

fs.__setFileContent = (file, content) => {
  __files[file] = content
}

fs.readFileSync = (file, encoding = 'utf8') => {
  return __files[file]
}

module.exports = fs
