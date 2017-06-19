import glob from 'glob'

export default async (dir, exclude = [], cb) => {
  return new Promise(resolve => {
    glob('**',
      {ignore: exclude, root: dir, follow: false},
      (err, files) => {
        files = err ? null : files
        resolve(files)
      }
    )
  })
}
