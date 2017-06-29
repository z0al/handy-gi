import { type } from 'os'

export const info = {
  name: 'Windows',
  template: 'Windows',
  global: true
}

export const match = async (files) => {
  return type() === 'Windows_NT'
}
