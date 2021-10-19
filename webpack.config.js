const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

/**
 * @type {import('webpack').Configuration} 
 */
const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, './src/assets'),
        },
        hot: true,
        port: 8000,
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name:'[name].[ext]',
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.scss$/i,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.vue$/i,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
}

module.exports = config;