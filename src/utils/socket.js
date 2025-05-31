import { io } from "socket.io-client";
export let socket = null;
export const socketClient = io(
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_SOCKET_PRODUCTION
    : process.env.NEXT_PUBLIC_API_URL_SOCKET_DEVELOPMENT
);

export const socketConnection = () => {
  socketClient.connect();
  console.log("connected with socket");
  socket = socketClient;
  window.socket = socketClient;
};

export const socketDisconnection = () => {
  socketClient.disconnect();
  console.log("disconnected");
};
