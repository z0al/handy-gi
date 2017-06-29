import { type } from 'os'

export const info = {
  name: 'macOS',
  template: 'macOS',
  global: true
}

export const match = async (files) => {
  return type() === 'Darwin'
}
