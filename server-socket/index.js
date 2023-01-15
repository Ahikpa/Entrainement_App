const { createServer } = require("http");
const { createClient } = require("redis");
const { readFileSync } = require("fs");
const { WebSocketServer } = require("ws");

const port = 8080;
const redisPort = 6379;
const redisHost = "0.0.0.0";
const redisChannel = "ai_broker";
const server = createServer();
const ws = new WebSocketServer({ server });
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const createRedisClient = async () => {
  const redisClient = createClient({
    socket: {
      port: redisPort,
      host: redisHost,
    },
  });

  await redisClient.connect();

  await redisClient.subscribe(redisChannel, function (message) {
    eventEmitter.emit(redisChannel, message);
  });
};

ws.on("connection", (ws) => {
  eventEmitter.on(redisChannel, (message) => {
    ws.send(message);
  });
  // ws.on("message", function message(data) {
  //   console.log("received: %s", data);
  // });
});

server.listen(port, async () => {
  await createRedisClient();
  console.log(`listening on port ${port}`);
});
