// For webpack.packages.js generation use ./manage.py generate_webpack_packages command


var path = require("path");
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var livereload;

// The development server (the recommended option for development)
// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("default", ["webpack:build-dev"], function () {
    livereload = require('gulp-livereload');

    livereload.listen();
    gulp.watch([
        "app/frontend/*",
        "app/frontend/**/*",
        "app/frontend/**/**/*",
        "app/frontend/**/**/**/*"
    ], ["webpack:build-dev"]);
});

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function (callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);

    myConfig.plugins = myConfig.plugins.concat(
      new webpack.DefinePlugin({
          "process.env": {
              "PRODUCTION": true
          }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(myConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));

        callback();
    });
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;
// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function (callback) {
    // run webpack
    myDevConfig.plugins = myDevConfig.plugins.concat(
      new webpack.DefinePlugin({
          "process.env": {
              "DEBUG": true
          }
      })
    );

    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
        livereload.reload();
    });
});
