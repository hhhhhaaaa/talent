const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProductionMode = process.env.NODE_ENV === 'production';

const clientConfig = {
    entry: {
        'index.js': path.resolve(__dirname, './src/client/index.jsx'),
    },
    mode: 'development',
    target: 'web',
    node: {
        __dirname: false,
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'distNear'),
        filename: 'frontBundle.js',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "/src/server"),
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.scss$/,
                    /\.json$/],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: false
                        }
                    }
                ]
            }, {
                test: /\.(scss)$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "/src/server"),
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.json$/,
                    /\.(png|svg|jpg|gif|jpeg|bmp)$/],
                use: [ MiniCssExtractPlugin.loader, 
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                                },
                            }
                        },
                    'postcss-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "/src/server"),
                    /\.html$/,
                    /\.scss$/,
                    /\.json$/,
                    /\.(png|svg|jpg|gif|jpeg|bmp)$/],
                use: [
                    'babel-loader',
                    'astroturf/loader'
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.scss',
            chunkFilename: 'index.scss',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'React App'
        })
    ],
    node: {
        fs: 'empty',
    }
}

 module.exports = clientConfig;