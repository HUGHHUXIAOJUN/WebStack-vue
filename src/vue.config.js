const webpack = require("webpack");
const  fs =require('fs');
const path = require("path");
module.exports = {
    transpileDependencies: ['webpack-dev-server/client'],
    chainWebpack: (config) => {
        config.entry.app = ['babel-polyfill', './src/main.js'];
        config.module
            .rule('svg-sprite')
            .use('svgo-loader')
            .loader('svgo-loader')
    },
    productionSourceMap:false,
}