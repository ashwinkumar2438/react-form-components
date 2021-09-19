const path = require( 'path' );
const fs = require( 'fs' );
const rules = require( './rules' );
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 

const libDir = path.join( __dirname, '..', 'src', 'library_components' );

const fileNames = fs.readdirSync( libDir )
                    .reduce( ( acc, name ) =>  ( { ...acc, [  name.match(/(.+)\./)[1] ]: `${libDir}/${ name }` }), {});

console.log( fileNames );

module.exports = {
    mode:'production',
    entry: fileNames ,
    output: {
        path: path.join( __dirname,'..' ,'lib'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules : rules
    },
    plugins:[
        new CopyPlugin([
            { 
                from: path.join( __dirname, '..', 'public') , 
                to: path.join( __dirname, '..','lib' ) 
            },
        ]),
        new BundleAnalyzerPlugin()
    ],
    externals:{
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        }
    }
}