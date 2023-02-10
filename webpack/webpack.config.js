// import Webpack npm module
var webpack = require('webpack');

module.exports = {
    // Which files type in our project, and where they are located
    resolve: {
        extension: ['','.js','.jsx'],
        modulesDirectories: ['src','node-modules'],
    },
    module: {
        // hoiw to process project files with loeaders
        loaders: [
            // process any .js or .jsx files with Babel
            {
                test: /\.jsx?$/,
                loaders: ['babel']
            }
        ]
    },
    // which file is the entry point to our application
    entry: [
        'index.jsx'
    ],
    // where to output the final bundled code to
    output: {
        filename: 'app.js',
        path: 'dist',
    }
};