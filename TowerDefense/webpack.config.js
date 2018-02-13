var path = require('path');

module.exports = {
    entry: "./statics/script/Stage.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        library: "Tower"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};