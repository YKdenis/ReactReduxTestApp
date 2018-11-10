//  WEBPACK V4.2

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: {main: './src/index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,

                include: [
                    path.resolve(__dirname, "./src/css/main.css"),
                ],
                use:  [  'style-loader', MiniCssExtractPlugin.loader, {
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, 'postcss.config.js')
                        },
                    }
                }]
            }
        ]
    },
    plugins: [
        htmlPlugin,
        // new ExtractTextPlugin(
        //    {filename: 'style.[chunkhash].css', disable: false, allChunks: true})
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ]
};