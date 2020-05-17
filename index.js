const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const { query } = url.parse(req.url);

  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
    if (body.length > 1e6) {
      request.connection.destroy();
    }
  });

  req.on("end", () => {
    res.writeHead(200);
    res.end(
      JSON.stringify(
        {
          httpVersion: req.httpVersion,
          url: req.url,
          method: req.method,
          headers: req.headers,
          query: querystring.parse(query),
          body: body.length > 0 ? JSON.parse(body.toString()) : null,
        },
        null,
        2
      )
    );
  });
});

server.listen(process.env.PORT || 3000);

process.on("SIGINT", process.exit);
