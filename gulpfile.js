var gulp = require('gulp')

const basePath = './node_modules/'

const Types = {
  js: './dist/js',
  css: './dist/css',
  font: './dist/fonts',
}

const Packages = {
  js: {
    jquery: `jquery/dist/jquery.js`,
    vue: `vue/dist/vue.js`,
  },
}

gulp.task('default', function(done) {
  for (let key in Packages) {
    for (let package in Packages[key]) {
      let from = `${basePath}${Packages[key][package]}`
      let to = Types[key]
      console.log(`Copying "${from}" to "${to}"`)
      gulp.src(from).pipe(gulp.dest(to))
    }
  }
  done()
})
