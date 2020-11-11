const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProductionMode = process.env.NODE_ENV === 'production';

const serverConfig = {
    entry: {
        'server.js': path.resolve(__dirname, './dist/server.js'),
    },
    mode: 'development',
    target: 'node',
    node: {
        __dirname: false,
    },
    output: {
        path: path.resolve(__dirname, 'distAnt'),
        filename: 'backBundle.js',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "/src/client"),
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
                    path.resolve(__dirname, "/src/client"),
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.json$/,
                    /\.(png|svg|jpg|gif|jpeg|bmp)$/],
                use: [MiniCssExtractPlugin.loader,
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
                    path.resolve(__dirname, "/src/client"),
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

 module.exports = serverConfig;