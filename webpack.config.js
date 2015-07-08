var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer-core');

//var wowsSassMixins = [path.join(__dirname, '/portal/source/sass/application/utils/')];
//var bourbon = require("node-bourbon").includePaths;
//
//var sassIncludePaths = 'includePaths[]=' + bourbon + '&includePaths[]=' + wowsSassMixins;
var sassIncludePaths = '';

module.exports = {
    cache: true,
    entry: './app/frontend/app.js',
    output: {
        path: __dirname + "/app/public",
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css?root=" + __dirname)
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract("style-loader", "css?root=" + __dirname + "!postcss-loader!sass?precision=8&indentedSyntax&" + sassIncludePaths)
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css?root=" + __dirname + "!postcss-loader!sass?precision=8&" + sassIncludePaths)
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: ['url-loader?limit=30000!image?bypassOnDebug=false&optimizationLevel=7&interlaced=false?progressive=true']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 version'] }) ],
    resolve: {
        root: [path.join(__dirname, "bower_components")],
        alias: {

        }
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
