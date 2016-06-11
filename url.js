/**
 * Created by student on 6/10/2016.
 */
var http = require('http')
var url=require('url')

var server=http.createServer(function (req, res) {
    var page =url.parse(req.url).pathname
    console.log(page)
    if (page=="/login"){
        res.write("successful login")
     }
    else{
        res.write("login error")
    }
    res.end()

})
  server.listen(8080)

