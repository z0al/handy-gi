export const info = {
  name: 'Python',
  template: 'Python',
  global: false
}

export const match = async (files) => {
  // Is there any Gemfile at the root?
  return files.includes('requirements.txt')
}
