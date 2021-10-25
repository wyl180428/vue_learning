const path = require('path')
const webpack=require('webpack')
const Htmlpugins=require('html-webpack-plugin')
const Uginfy=require('uglifyjs-webpack-plugin')
module.exports={
    entry:'./src/main.js',
    output:{
        path: path.resolve(__dirname,'dist') ,
        filename:'bundle.js',
        // publicPath: ('dist/')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:'img/[name].[hash:8].[ext]'
                        },

                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve:{
        //alias/别名
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }

    },
    plugins:[
        new  webpack.BannerPlugin('最终版权归本人所有'),
        new Htmlpugins({
            template:'index.html'
        }),
        new Uginfy()
    ],
    devServer:{
        contentBase:'./dist',
        inline:true
    }
}