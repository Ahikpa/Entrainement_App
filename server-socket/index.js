const { createServer } = require("http");
const { createClient } = require("redis");
const { readFileSync } = require("fs");
const { WebSocketServer } = require("ws");

const port = 8080;
const redisChannel = "ai_broker";
const redisClient = createClient({ host: "127.0.0.1", port: 6379 });

const server = createServer();
const ws = new WebSocketServer({ server });

async function startRedisServer() {
  const subscriber = redisClient.duplicate();
  await subscriber.connect();
  await subscriber.subscribe(redisChannel, (message) => {
    console.log(message);
    ws.send(message);
  });
  console.log("connected");
}

ws.on("connection", function connection(ws) {
  console.log("new client connected");
  // ws.on("message", function message(data) {
  //   console.log("received: %s", data);
  // });
  //
});

startRedisServer();

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
