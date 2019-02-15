import * as fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({});
import axios from 'axios';

let cached = {};

const interval = 5 * 60 * 1000;

const fetchRainfallReport = async () => {
    const result = await axios('https://www.dallasopendata.com/resource/xm9r-xkdu.json');
    cached = result.data;
}

fetchRainfallReport();

setInterval(() => {
    fetchRainfallReport();
}, interval);

server.get('/api/report', (request, reply) => {
    // for better reply types, see: https://bit.ly/2E45Rzy
    reply.code(200).send(cached);
});

server.listen(8081, (err, address) => {
    if (err) throw err;
    console.log("server listening on " + address);
});