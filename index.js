const http = require("http");

let port = process.env.PORT || 3000;
let host = process.env.HOST || "127.0.0.1";
let httpServer = http.createServer((req, res) => {
	const pathName = req.url;
	if (pathName == "/hello") {
		let method = req.method;
		let response = "";
		switch (method) {
			case "GET": {
                response = "world"
                break;
            }
			case "POST": {
                response = "world created"
                break;
            }
			case "PUT": {
                response = "world updated"
                break;
            }
			case "DELETE": {
                response = "world deleted"
                break;
            }

		}
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end(response);
	}
});

httpServer.listen(port, host, e => {
	console.error(`Server run at ${host}:${port}`);
});
