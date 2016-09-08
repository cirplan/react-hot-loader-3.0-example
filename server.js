var express = require('express')

var app = new express()
var port = 3000

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(port, (error) => {
	if (error) {
		console.error(error)
	}  else {
		console.info("Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.", port, port)
	}
})