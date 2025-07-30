FROM denoland/deno:alpine

# Create app directory
WORKDIR /app

# Copy your code
COPY server.ts .

# Expose the WebSocket port
EXPOSE 8080

# Run the WebSocket server
CMD ["run", "--allow-net", "server.ts"]
