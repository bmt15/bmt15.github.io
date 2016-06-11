var http = require('http')
var server=http.createServer(function (req, res) {

    res.end()
})
server.on("close", function () {
    console.log("hi  serever is stop")
})
server.listen(8080)
server.close()

