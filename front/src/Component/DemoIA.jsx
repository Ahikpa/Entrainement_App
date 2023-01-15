import React, { useEffect } from "react";
import ReconnectingWebSocket from "reconnecting-websocket";
const socketUrl = "ws://127.0.0.1:8080";

async function initApp() {
  const rws = new ReconnectingWebSocket(socketUrl);
  rws.addEventListener("open", () => {
    rws.send("hello!");
  });

  rws.addEventListener("message", (message) => {
    console.log("new message =>", message);
  });
}

function DemoIA() {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
}

export default DemoIA;
