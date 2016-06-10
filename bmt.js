var http= require('http')

var server= http.createServer(function(req,res){
res.writeHead(200,{"contentType":"text/html"})
res.end("<h1>Hello</h1><br><h2>my self Bashistha Mani Tripathi</h2><br><p>from:gkp,up<br>live:Gr.Noida<br>my DOB is:14 jun<br>i am comleted BCA from Lucknow<br>And MCA from NIET Gr. Noida</p>")
})
server.listen(8080)