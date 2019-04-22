const http = require("http");


const {PORT, HOST} = process.env;
const httpServer = http.createServer((req, res) => {
	const pathName = req.url;
	if ("/hello" === pathName) {
        const method = req.method;
        const resMapping = {
            'GET': 'world',
            'POST':'world created',
            'PUT':'world updated',
            'DELETE':'world deleted'
        }
		res.writeHead(200, { "Content-Type": "text/html" });
        res.write(resMapping[method] );
        res.end();
	}
});



httpServer.listen(PORT||3000);
console.log("Server started at "+ PORT);
