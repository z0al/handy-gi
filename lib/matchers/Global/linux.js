import { type } from 'os'

export const info = {
  name: 'Linux',
  template: 'Linux',
  global: true
}

export const match = async (files) => {
  return type() === 'Linux'
}
