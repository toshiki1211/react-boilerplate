module.exports = {
    mode: 'development', // mode: 'production'

    entry: './assets/js/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ],
    },
}