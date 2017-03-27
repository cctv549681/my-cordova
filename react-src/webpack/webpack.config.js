const path = require('path');
const webpack = require('webpack');
// const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin(options);

const root = path.join(__dirname, '../../www/js');

const entry = {
    'build/login/Login': "./src/App.tsx"
};

module.exports = {
    entry: ["babel-polyfill", "./src/App.tsx"],
    output: {
        path: path.join(root),
        filename: "App.js"
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM",
    //     "lodash": "_"
    // },
    watch: true,

    devtool: 'source-map',
    resolve: {
        // alias: {
        //     'react': 'react-lite',
        //     'react-dom': 'react-lite'
        // },
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        },
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    },
    // plugins: [
    //     function () {
    //         this.plugin("done", function (stats) {
    //
    //         })
    //     }
    // ]
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         },
    //         except: ['$super', '$', 'exports', 'require']
    //     })
    // ]
};