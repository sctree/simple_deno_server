const ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
  console.log("WebSocket connected");
  ws.send("Hello from Chrome!");
};

ws.onmessage = (e) => {
  console.log("Received from server:", e.data);
};

ws.onerror = (e) => {
  console.error("WebSocket error:", e);
};

ws.onclose = () => {
  console.log("WebSocket closed");
};
