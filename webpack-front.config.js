const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const images = /(?<images>.png|svg|bmp|jpe?g|gif)/u;
const haych = /(?<html>.html)/u;
const jay = /(?<javascript>.js|jsx)/u;
const sass = /(?<scss>.scss)/u;
const son = /(?<json>.json)/u;

const clientConfig = {
    entry: {
        'index.js': path.resolve(__dirname, './src/client/index.jsx'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, '/src/server'),
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
                    path.resolve(__dirname, '/src/server'),
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
                    path.resolve(__dirname, '/src/server'),
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
        filename: 'frontBundle.js',
        globalObject: 'this',
        path: path.join(__dirname, 'distNear'),
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
    target: 'web',
};

module.exports = clientConfig;
