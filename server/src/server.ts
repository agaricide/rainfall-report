import * as fastify from 'fastify';
import * as helmet from 'fastify-helmet';
import { IncomingMessage, Server, ServerResponse } from 'http';
import * as RainfallReport from './pollReport';

RainfallReport.pollReport();

const helmetConfig: helmet.FastifyHelmetOptions = {
  hidePoweredBy: {
    setTo: 'AGAR'
  }
};

const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({});

server.register(helmet, helmetConfig);

server.get('/api/report', (_, response) => {
  response.code(200).send(RainfallReport.cached);
});

server.listen(8081, (error, address) => {
  if (error) throw error;
  console.log(`Server listening on port ${address}`);
});