const webpack = require('webpack');
const path = require('path');

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];
module.exports = {
	entry:[
		'webpack-dev-server/client?http://localhost:5555',
		'webpack/hot/only-dev-server',
		__dirname + '/app.js'
	],
	output:{
		path:__dirname + '/prd',
		filename:'bundle.js'
	},
	// devtool:'source-map',
	
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
			},{
				test:/\.js$/,
				loader:'babel-loader',
				exclude: /node_modules/
			},{
				test:/\.jsx$/,
				loader:'babel-loader',
				exclude: /node_modules/
			}, {
				test: /\.(svg)$/i,
				loader: 'svg-sprite',
				include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
		extensions: ['', '.web.js', '.js', '.json'],
	}
}