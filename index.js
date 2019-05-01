const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

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
            default:{
                response = "Invalid world"
                break; 
            }
		}
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end(response);
    } else {
        res.end("unknown route")
    }
     
});

httpServer.listen(port, e => {
	console.error(`Server run at ${host}:${port}`);
});
