"use strict";
exports.__esModule = true;
var fastify = require("fastify");
var server = fastify({});
server.get('/ping', function (request, reply) {
    // for better reply types, see: https://bit.ly/2E45Rzy
    console.log(reply.res);
    reply.code(200).send({ pong: 'it worked!' });
});
server.listen(8081, function (err, address) {
    if (err)
        throw err;
    console.log("server listening on " + address);
});
//# sourceMappingURL=main.js.map