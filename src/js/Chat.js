export default class Chat {
    constructor(areaForChat, wsConnect) {
        this.wsConnect = wsConnect;
        this.areaForChat = document.querySelector('.' + areaForChat);
        this.init();
    }
    init() {
        if (!window.localStorage.user) {
            this.showRegistered();
        } else {
            window.localStorage.user = null;
            this.showRegistered();
        }
    }
    renderUserList(users) {
        const userlistArea = document.querySelector('.userlist');
        const userList = [];
        users.forEach(user => {
            userList.push(`<li class="userlist__item">${user}</li>`);
        });
        userlistArea.innerHTML = userList.join('');
    }
    showRegistered() {
        const formRegister = `
            <form action="" class="form-register">
                <label for="username">Имя пользователя: </label>
                <input type="text" name="username" class="form-register-username">
                <button class="form-register-send">Зарегистрироваться в чате</button>
            </form>`;
        this.areaForChat.innerHTML = formRegister;
        this.formRegister = document.querySelector('.form-register');
        this.formRegisterUsername = document.querySelector('.form-register-username');
        this.formRegister.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.wsConnect.registerUser(this.formRegisterUsername.value);
        });
    }
    showChatSpace(users) {
        const userList = [];
        users.forEach(user => {
            userList.push(`<li class="userlist__item">${user}</li>`);
        });
        const formChat = `
        <div class="chat">
            <ul class="userlist">
            ${userList.join('')}
            </ul>
            <div class="chat-message">
                <ul class="chat-message__list">
                
                </ul>
                <form class="chat-message__form">
                    <input type="text" class="chat-message__input">
                    <button class="chat-message__send">Отправить</button>
                </form>
            </div>
            </div>
            `;
        this.areaForChat.innerHTML = formChat;
        this.chatMessageInput = document.querySelector('.chat-message__input');
        this.chatMessageList = document.querySelector('.chat-message__list');
        document.querySelector('.chat-message__form').addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.wsConnect.sendMessage({ message: this.chatMessageInput.value, user: window.localStorage.user });
        });
        console.log('открыт чат', users);
    }
    showIncorrectUser() {
        this.areaForChat.append('Пользователь уже существует, введите другое имя');
    }
    addMessage(objMessage) {
        this.chatMessageInput.value = '';
        let li = document.createElement('li');
        li.classList.add('chat-message__item');
        if (objMessage.user == window.localStorage.user) {
            li.classList.add('chat-message_my-message');
        }
        li.innerHTML = `<h4 class="message-user">${objMessage.user}</h4> <p class="message-text">${objMessage.message}</p><p class="message-date">${new Date().toUTCString()}</p>`
        this.chatMessageList.append(li);
    }
}