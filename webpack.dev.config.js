/**
 * Created by duanguang on 2017/3/9.
 */

var webpack=require('webpack');
var path=require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var entry={
    'common/core':[
        'react','react-dom'
    ],
    'index':'./src/entry/index'
};

module.exports={
    entry:entry,

    resolve:{
        modulesDirectories: ['', 'src', 'node_modules'],
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.json', '.js']
    },
    output:{
        path:path.join(__dirname,'app'),
        publicPath:"/app/",
        filename:'[name].js'
    },

    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: /src/,
                loader:'react-hot'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                include: /src/,
                loader: 'babel'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)\??.*$/i,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin('common/core', 'common/core.js'),
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'app',
            files: {
                "js": ["assets/head_bundle.js", "assets/main_bundle.js"],
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new OpenBrowserPlugin({url: `http://localhost:8889`}),
    ]
};
