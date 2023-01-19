const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [
        require('cssnano'),
        autoprefixer({}),
        purgecss({
            content: ['src/index.html'],
            css: ['src/styles/style.css']
        }),

    ]
}

