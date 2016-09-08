var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.dev.config')

var app = new (require('express'))()
var port = 3100

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.listen(port, (error) => {
	if (error) {
		console.error(error)
	}  else {
		console.info("Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.", port, port)
	}
})
