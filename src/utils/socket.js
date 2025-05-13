import { io } from "socket.io-client";
export let socket = null;
export const socketClient = io("https://portfolioserver-0qyd.onrender.com");

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
