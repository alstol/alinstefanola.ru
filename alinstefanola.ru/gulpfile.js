/// <binding BeforeBuild='default' />
var gulp = require('gulp')
var run = require('gulp-run')

const basePath = './node_modules/'

const Types = {
    js: './wwwroot/js',
    css: './wwwroot/css',
    font: './wwwroot/fonts',
}

const Packages = {
    js: {
        jquery: `jquery/dist/jquery.js`,
        vue: `vue/dist/vue.js`,
    },
}

gulp.task('default', function (done) {
    run('npm install')
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
