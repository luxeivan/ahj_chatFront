import Chat from "./Chat";
import Ws from "./Ws";

const wsConnect = new Ws('ws://localhost:8081');
//const wsConnect = new Ws('wss://ahj-chat-back-luxeivan.vercel.app:8081/');
const chat = new Chat('chat-area', wsConnect);
wsConnect.addChat(chat);