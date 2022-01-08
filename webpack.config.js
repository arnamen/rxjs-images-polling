require('dotenv').config()

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    target: "web",
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: ["./src/*"],
        liveReload: true,
        compress: true,
        port: 3000,
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".scss", ".hbs"],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};