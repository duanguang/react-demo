/**
 * Created by duanguang on 2017/3/9.
 */

var request = require('request');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.config.js");

var port = 8889;
config.entry['common/core'].unshift("webpack-dev-server/client?http://localhost:" + port, "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());
var compiler = webpack(config);

var bundleStartTime;

compiler.plugin('compile', () => {
    console.info('Bundling...');
    bundleStartTime = Date.now();
});

compiler.plugin('done', () => {
    console.info(`Bundled in ${Date.now() - bundleStartTime} ms. ${new Date()}`);
});

var server = new WebpackDevServer(compiler, {
    contentBase: `./views`,
    hot: true,
    historyApiFallback: {
        rewrites: [
            {from: /\//, to: '/app/index.html'},
        ],
    },
    host: '0.0.0.0',
    quiet: false,
    noInfo: false,
    publicPath: "/app/",
    stats: {colors: true},

    proxy: {
        '*': {
            //path: /^\/(?!(webpack\-dev\-server)|(webpack)|(sockjs\-node)|(Q\.Draft)).*$/i,
            target: 'http://tstq.360kad.com/',
            //host: 'tstq.360kad.com',
            secure: false,
            bypass: function (req, res, proxyOptions) {
                debugger;
                if (req.originalUrl === '/') {
                    return '/dist/index.html';
                }
            },
            onProxyReq: (proxyReq, req, res) => {
                
            }
        }
    },

    setup: function (app) {
    }

});

server.listen(port, null, function () {
    console.log(`http://localhost:${port}`);
});