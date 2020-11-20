const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const images = /(?<images>.png|svg|bmp|jpe?g|gif)/u;
const haych = /(?<html>.html)/u;
const jay = /(?<javascript>.js|jsx)/u;
const sass = /(?<scss>.scss)/u;
const son = /(?<json>.json)/u;

const serverConfig = {
    entry: {
        'server.js': path.resolve(__dirname, './dist/server.js'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, '/src/client'),
                    haych,
                    jay,
                    sass,
                    son,
                ],
                test: images,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: false,
                        },
                    },
                ],
            },
            {
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, '/src/client'),
                    haych,
                    jay,
                    son,
                    images,
                ],
                test: sass,
                use: [MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                        },
                    },
                },
                    'postcss-loader',
                    'sass-loader'],
            },
            {
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, '/src/client'),
                    haych,
                    sass,
                    son,
                    images,
                ],
                test: jay,
                use: [
                    'babel-loader', 'astroturf/loader',
                ],
            },
        ],
    },
    node: {
        __dirname: false,
    },

    output: {
        filename: 'backBundle.js',
        globalObject: 'this',
        path: path.resolve(__dirname, 'distAnt'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            chunkFilename: 'index.scss',
            filename: 'index.scss',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'React App',
        }),
    ],
    target: 'node',
};

module.exports = serverConfig;
