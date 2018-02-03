const webpcak = require('webpack');
const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    //入口
    entry: {
        app: path.resolve(__dirname, './src/index.js')
    },
    //打包后文件输出
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'aiMap.js',//'[name].aiMap.js'
        library:'A'
    },
    module: {
        rules: [{
                //打包样式文件
                test: /\.css|.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            //打包图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            //打包字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist'])
    ]
}