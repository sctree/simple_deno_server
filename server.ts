const port = 8080;
console.log(`WebSocket server running on ws://0.0.0.0:${port}`);

Deno.serve({ port }, async (req) => {
  const { socket, response } = Deno.upgradeWebSocket(req);

  socket.onopen = () => {
    console.log("Client connected");
  };

  socket.onmessage = (event) => {
    console.log("Received:", event.data);
    socket.send(`Echo: ${event.data}`);
  };

  socket.onerror = (e) => {
    console.error("WebSocket error:", e);
  };

  socket.onclose = () => {
    console.log("Client disconnected");
  };

  return response;
});
