import { sync as exists } from 'command-exists'

export const info = {
  name: 'Visual Studio Code',
  template: 'VisualStudioCode',
  global: true
}

export const match = async (files) => {
  return exists('code')
}
