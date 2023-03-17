const path = require('path');

module.exports = {
    entry: {
        'index': './src/index.js',
        'presentation': './src/presentation.js',
        'remote': './src/remote.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};