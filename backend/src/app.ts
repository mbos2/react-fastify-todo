import fastify from 'fastify';
import toDoRoute from './routes/todo.route';

// Add routes to this array
const routes = [{route: toDoRoute, prefix: '/todo'}];

function createServer() {
  const server = fastify({ logger: { prettyPrint: true } });
  server.register(require("fastify-cors"));
  
  routes.forEach(function(r){
    server.register(r.route, {prefix: r.prefix});
  }) 

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  return server;
}

export default createServer;
