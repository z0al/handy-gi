export const info = {
  name: 'Ruby',
  template: 'Ruby',
  global: false
}

export const match = async (files) => {
  // Is there any Gemfile in the root?
  return files.includes('Gemfile')
}
