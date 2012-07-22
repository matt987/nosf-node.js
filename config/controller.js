var queryString = require('querystring');

function controller(routes, path_controller, path_action, method, response, postData){
  var methods = routes.controller[path_controller];
  
  if(typeof methods === 'undefined'){
    var actions = []
  }else{
    var actions = methods[method]
  }

  if(actions.indexOf(path_action) >= 0){
  	if(method === 'get'){
  		eval(path_controller + '.' + path_action + '()');
  	}else{
  		eval(path_controller + '.' + path_action + '(' + postData + ')');	
  	}
    
  }else{
    console.log("No se encontró manipulador para " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
  console.log("A punto de rutear una peticion para " + pathname);
};

exports.controller = controller;