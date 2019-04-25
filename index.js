const http = require("http");


let port   = process.env.PORT || 3000;
let host  = process.env.HOST || '127.0.0.1';
let httpServer = http.createServer((req, res) => {
	const pathName = req.url;
	if (pathName =='/hello') {
        let method = req.method;
        let resMapping = {
            'GET': 'world',
            'POST':'world created',
            'PUT':'world updated',
            'DELETE':'world deleted'
        }
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(resMapping[method]);
	} 
});

httpServer.listen(port , host, (e)=>{
    console.error(`Server run at ${host}:${port}`);
});

