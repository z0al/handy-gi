const cm = jest.genMockFromModule('command-exists')

let commands = []

cm.__setCommand = (cmd, flag) => {
  commands[cmd] = flag
}

cm.sync = (cmd) => {
  return commands[cmd]
}

module.exports = cm
