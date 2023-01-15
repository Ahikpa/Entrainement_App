import React, { useEffect, useRef, useState } from "react";
import ReconnectingWebSocket from "reconnecting-websocket";
import _ from "lodash";
const socketUrl = "ws://127.0.0.1:8080";

function DemoIA() {
  const [data, setData] = useState({
    available: 0,
    total: 0,
  });

  async function initApp() {
    const rws = new ReconnectingWebSocket(socketUrl);
    rws.addEventListener("message", (message) => {
      try {
        const jsonData = JSON.parse(message.data);
        if (!_.isEqual(jsonData, data.current)) setData(jsonData);
      } catch (error) {}
    });
  }

  useEffect(() => {
    initApp();
  }, []);

  return (
    <div>
      <h1>Données sur les places</h1>
      <ul>
        <li>Nombre de places disponibles: {data.available}</li>
        <li>Nombre total de places: {data.total}</li>
      </ul>
    </div>
  );
}

export default DemoIA;
