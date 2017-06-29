const os = jest.genMockFromModule('os')

let __os = 'Linux'

os.__setOS = (os) => {
  __os = os
}

os.type = () => {
  return __os
}

module.exports = os
