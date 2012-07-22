//var controller = require("./controller");

var controllers = {};
controllers["productos"] =
{
	"get":  ["new","edit","destroy"],
	"post": ["create", "update"]
};

exports.controllers = controllers;