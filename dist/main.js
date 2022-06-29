(()=>{"use strict";const e=new class{constructor(e){this.ws=new WebSocket(e),this.ws.binaryType="blob",this.ws.addEventListener("open",(()=>{console.log("connected")})),this.ws.addEventListener("message",(e=>{JSON.parse(e.data).userIncorrect?this.chat.showIncorrectUser():JSON.parse(e.data).currentUser?(window.localStorage.user=JSON.parse(e.data).currentUser,this.chat.showChatSpace(JSON.parse(e.data).openUsers)):JSON.parse(e.data).message?this.chat.addMessage(JSON.parse(e.data)):JSON.parse(e.data).openUsers&&this.chat.renderUserList(JSON.parse(e.data).openUsers),console.log(JSON.parse(e.data))})),this.ws.addEventListener("close",(e=>{console.log("connection closed",e)})),this.ws.addEventListener("error",(e=>{console.log("error ",e)}))}sendMessage(e){this.ws.send(JSON.stringify(e))}registerUser(e){this.ws.send(JSON.stringify({register:e}))}addChat(e){this.chat=e}}("wss://chatback1.herokuapp.com:8081"),s=new class{constructor(e,s){this.wsConnect=s,this.areaForChat=document.querySelector("."+e),this.init()}init(){window.localStorage.user?(window.localStorage.user=null,this.showRegistered()):this.showRegistered()}renderUserList(e){const s=document.querySelector(".userlist"),t=[];e.forEach((e=>{t.push(`<li class="userlist__item">${e}</li>`)})),s.innerHTML=t.join("")}showRegistered(){this.areaForChat.innerHTML='\n            <form action="" class="form-register">\n                <label for="username">Имя пользователя: </label>\n                <input type="text" name="username" class="form-register-username">\n                <button class="form-register-send">Зарегистрироваться в чате</button>\n            </form>',this.formRegister=document.querySelector(".form-register"),this.formRegisterUsername=document.querySelector(".form-register-username"),this.formRegister.addEventListener("submit",(e=>{e.preventDefault(),this.wsConnect.registerUser(this.formRegisterUsername.value)}))}showChatSpace(e){const s=[];e.forEach((e=>{s.push(`<li class="userlist__item">${e}</li>`)}));const t=`\n        <div class="chat">\n            <ul class="userlist">\n            ${s.join("")}\n            </ul>\n            <div class="chat-message">\n                <ul class="chat-message__list">\n                \n                </ul>\n                <form class="chat-message__form">\n                    <input type="text" class="chat-message__input">\n                    <button class="chat-message__send">Отправить</button>\n                </form>\n            </div>\n            </div>\n            `;this.areaForChat.innerHTML=t,this.chatMessageInput=document.querySelector(".chat-message__input"),this.chatMessageList=document.querySelector(".chat-message__list"),document.querySelector(".chat-message__form").addEventListener("submit",(e=>{e.preventDefault(),this.wsConnect.sendMessage({message:this.chatMessageInput.value,user:window.localStorage.user})})),console.log("открыт чат",e)}showIncorrectUser(){this.areaForChat.append("Пользователь уже существует, введите другое имя")}addMessage(e){this.chatMessageInput.value="";let s=document.createElement("li");s.classList.add("chat-message__item"),e.user==window.localStorage.user&&s.classList.add("chat-message_my-message"),s.innerHTML=`<h4 class="message-user">${e.user}</h4> <p class="message-text">${e.message}</p><p class="message-date">${(new Date).toUTCString()}</p>`,this.chatMessageList.append(s)}}("chat-area",e);e.addChat(s)})();