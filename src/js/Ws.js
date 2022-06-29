export default class Ws {
    constructor(url) {
        this.ws = new WebSocket(url);
        this.ws.addEventListener('connection', (evt) => {
            console.log('connected: ', evt);// After this we can send messages
        });
        console.dir(this.ws);
        this.ws.binaryType = 'blob';
        this.ws.addEventListener('open', () => {
            console.log('connected');// After this we can send messages
        });
        this.ws.addEventListener('message', (evt) => {// handle evt.data
            if (JSON.parse(evt.data).userIncorrect) {
                this.chat.showIncorrectUser();
            } else if (JSON.parse(evt.data).currentUser) {
                window.localStorage.user = JSON.parse(evt.data).currentUser;
                this.chat.showChatSpace(JSON.parse(evt.data).openUsers);
            } else if (JSON.parse(evt.data).message) {
                this.chat.addMessage(JSON.parse(evt.data));
            } else if (JSON.parse(evt.data).openUsers) {
                this.chat.renderUserList(JSON.parse(evt.data).openUsers);
            }
            console.log(JSON.parse(evt.data));
        });
        this.ws.addEventListener('close', (evt) => {
            console.log('connection closed', evt);// After this we can't send messages
        });
        this.ws.addEventListener('error', (evt) => {
            console.log('error: ', evt);
        });
    }
    sendMessage(obj) {
        if (this.ws.readyState === 1) {
            this.ws.send(JSON.stringify(obj));
        }
    }
    registerUser(userName) {
        if (this.ws.readyState === 1) {
            this.ws.send(JSON.stringify({ register: userName }));
        }
    }
    addChat(chat) {
        this.chat = chat;
    }
}