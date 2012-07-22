var server = require("config/server");
var router = require("config/router");
var handle = require("config/routes");

server.start(router.route, handle);
