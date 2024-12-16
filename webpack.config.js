const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/products/adapters/primary/scripts.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/products/adapters/primary/index.html',
        }),
    ],
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        liveReload: true,
        compress: true,
        port: 9000,
        open: true,
        hot: true,
    },
};