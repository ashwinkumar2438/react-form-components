const path = require( 'path' );
const rules = require( './rules' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode:'development',
    output: {
        path: path.join( __dirname,'..' ,'development'),
        filename: 'index.js'
    },
    devServer:{
        port: 3003,
        static: path.join( __dirname,'..' ,'development')
    },
    module: {
        rules : rules
    },
    plugins:[
        new HtmlWebpackPlugin({ 
            filename: 'index.html',
            template: 'src/index.html'
          }),
        new CopyPlugin([
            { 
                from: path.join( __dirname, '..', 'public') , 
                to: path.join( __dirname, '..','development' ) 
            },
        ]),
    ]
}