const http = require("http");


const port   = process.env.PORT || 3000;
const host  = process.env.HOST;
const httpServer = http.createServer((req, res) => {
	const pathName = req.url;
	if (pathName =='/hello') {
        const method = req.method;
        const resMapping = {
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
    console.error(e);
});

