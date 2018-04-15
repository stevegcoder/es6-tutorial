var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }  
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    stats: {
        colors: true
    },

    devtool: 'source-map'
};