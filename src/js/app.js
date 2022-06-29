import Chat from "./Chat";
import Ws from "./Ws";

//const wsConnect = new Ws('ws://192.168.1.112:8081');
const wsConnect = new Ws('wss://chatback1.herokuapp.com:8081');
const chat = new Chat('chat-area', wsConnect);
wsConnect.addChat(chat);