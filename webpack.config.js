const path = require('path');

module.exports = {
    entry: {
        'index': './src/index.js',
        'presentation': './src/presentation.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    experiments: {
        topLevelAwait: true
    },
};