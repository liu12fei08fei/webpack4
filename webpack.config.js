const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist/'),
        filename:'assets/js/main.js',
        publicPath:'./'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'你好',
            template:'./src/index.html',
            filename:'index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    mode:'production',
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    // options:{
                    //     presets:['react']
                    // }
                }],
                exclude:[
                    path.resolve(__dirname,'node_modules')
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules: true,
                            localIdentName:'[path]-[name]-[local]_[hash:base64:8]'
                        }
                    }
                ],
                exclude:[
                    path.resolve(__dirname,'node_modules')
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                include:[
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test:/\.(png|jpg)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:80000,
                        name:'assets/img/[name]-[hash:8].[ext]'
                    }
                }]
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        name:'assets/fonts/[name]-[hash].[ext]'
                    }
                }]
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    devServer:{
        open:true,
        publicPath:'/',
        contentBase: '/'
    }
};