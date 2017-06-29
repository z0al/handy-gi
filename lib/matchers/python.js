export const info = {
  name: 'Python',
  template: 'Python',
  global: false
}

export const match = async (files) => {
  // Is there any requirements file in the root?
  return files.includes('requirements.txt')
}
