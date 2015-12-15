var jsonServer = require('json-server');
var fs = require('fs');

var jsonfolder = __dirname+"/dbs/";
var db = {};
var files = fs.readdirSync(jsonfolder);
files.forEach(function (file) {
 if (path.extname(jsonfolder + file) === '.json') {
     db[path.basename(jsonfolder + file, '.json')] = require(path.join(jsonfolder,file));
 }
});

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

// Returns an Express router
var router = jsonServer.router(db);
server.use(router);

server.listen(process.env.port || 3000);