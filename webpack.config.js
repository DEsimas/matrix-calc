const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    target: 'web',
    devServer: {
        port: '9500',
        static: ['./public'],
        open: true,
        hot: true,
        liveReload: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}