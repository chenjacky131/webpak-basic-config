var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry:'./app/index.js',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,// 处理require进来的css
				use:['style-loader','css-loader']
			},
			{
				test:/\.(png|jpg|gif)$/,//处理css引入的图片
				use:'url-loader?limit=20000&name=./themes/images/[name].[ext]'// 制定图片打包的目录和文件名等
			}
		]
	},
	externals:{// 不打包jquery的情况下使用jquery,使用 var $ = require('jquery');
		jquery:'window.$'
	},
	devServer:{// 配置devserver的信息
		inline:true,
		hot:true,
		compress:true,
		port:9000,
		contentBase:path.join(__dirname,'dist')
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin({// 压缩生成的bundlejs
			compress:{
				warnings:false
			}
		}),
		new webpack.HotModuleReplacementPlugin(),// 开启全局的模块热替换（HMR）
		new webpack.NamedModulesPlugin()// 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
	]
};
