// Require the framework and instantiate it
const fastify = require('fastify')();

// get db
const {connectedToDB} = require('./db');
// get our routes
const routes = require('./routes');

// register our routes
fastify.register(routes, {}, err => {
  if (err) throw err;
});

module.exports = async () => {
  await connectedToDB;

  // Run the server!
  fastify.listen(3000, err => {
    if (err) throw err;
    console.log(`Server listening on ${fastify.server.address().port}`);
  });
};
