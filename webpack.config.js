const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProductionMode = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/client/index.js',
    externals: [nodeExternals()],
    mode: isProductionMode ? 'production' : 'development',
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.json$/,
                ],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: false
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.json$/,
                    /\.(png|svg|jpg|gif|jpeg|bmp)$/
                ],
                use: [
                    isProductionMode ? MiniCssExtractPlugin.loader :
                        'css-loader',
                        'postcss-loader'
                ]
            }, {
                test: /\.(js|jsx)$/,
                exclude: [
                    /\.html$/,
                    /\.css$/,
                    /\.json$/,
                    /\.(png|svg|jpg|gif|jpeg|bmp)$/
                ],
                use: [
                    'babel-loader',
                    'astroturf/loader'
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css',
            chunkFilename: 'index.css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'React App',
            template: './public/index.html'
        }),
        new NodemonPlugin()
    ],
    node: {
        fs: 'empty',
    },
    resolve: {
        alias: {
            talent: path.resolve('./src/client')
        },
        extensions: ['.js', '.jsx'],
    },
    target: 'node'
};