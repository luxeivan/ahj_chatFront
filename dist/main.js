(()=>{"use strict";var e={705:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&o[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),r.push(u))}},r}},738:e=>{e.exports=function(e){return e[1]}},402:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(738),s=t.n(n),a=t(705),o=t.n(a)()(s());o.push([e.id,"body {\r\n    background-color: bisque;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat {\r\n    display: flex;\r\n}\r\n\r\n.userlist {\r\n    list-style: none;\r\n    width: 25%;\r\n}\r\n\r\n.chat-message {\r\n    width: 75%;\r\n    border: 1px solid gray;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    height: 100vh;\r\n}\r\n\r\n.chat-message__list {\r\n    list-style: none;\r\n    \r\n}\r\n\r\n.chat-message__item {\r\n    background-color:aquamarine;\r\n    margin: 5px;\r\n}\r\n\r\n.chat-message_my-message {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: end;\r\n    align-items: flex-end;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.message-user {\r\n    padding: 5px;\r\n    margin: 0;\r\n    color: black;\r\n    font-size: 20px;\r\n    font-weight:800;\r\n}\r\n\r\n.message-text {\r\n    padding: 5px;\r\n    margin: 0;\r\n    color: rgb(44, 44, 44);\r\n}\r\n\r\n.message-date {\r\n    padding: 5px;\r\n    margin: 0;\r\n    color: gray;\r\n    font-size: 8px;\r\n}\r\n.chat-message__input{\r\n    height: 30px;\r\n    width: 70%;\r\n    margin: 10px;\r\n}",""]);const i=o},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},o=[],i=0;i<e.length;i++){var c=e[i],l=n.base?c[0]+n.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var h=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)r[h].references++,r[h].updater(p);else{var m=s(p,n);n.byIndex=i,r.splice(i,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function s(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,s){var a=n(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var i=t(a[o]);r[i].references--}for(var c=n(e,s),l=0;l<a.length;l++){var u=t(a[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var s=void 0!==t.layer;s&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,s&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var s=r[n];if(void 0!==s)return s.exports;var a=r[n]={id:n,exports:{}};return e[n](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nc=void 0,(()=>{var e=t(379),r=t.n(e),n=t(795),s=t.n(n),a=t(569),o=t.n(a),i=t(565),c=t.n(i),l=t(216),u=t.n(l),d=t(589),h=t.n(d),p=t(402),m={};m.styleTagTransform=h(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=u(),r()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const g=new class{constructor(e){this.ws=new WebSocket(e),this.ws.binaryType="blob",this.ws.addEventListener("open",(()=>{console.log("connected")})),this.ws.addEventListener("message",(e=>{JSON.parse(e.data).userIncorrect?this.chat.showIncorrectUser():JSON.parse(e.data).currentUser?(window.localStorage.user=JSON.parse(e.data).currentUser,this.chat.showChatSpace(JSON.parse(e.data).openUsers)):JSON.parse(e.data).message?this.chat.addMessage(JSON.parse(e.data)):JSON.parse(e.data).openUsers&&this.chat.renderUserList(JSON.parse(e.data).openUsers),console.log(JSON.parse(e.data))})),this.ws.addEventListener("close",(e=>{console.log("connection closed",e)})),this.ws.addEventListener("error",(e=>{console.log("error ",e)}))}sendMessage(e){this.ws.send(JSON.stringify(e))}registerUser(e){this.ws.send(JSON.stringify({register:e}))}addChat(e){this.chat=e}}("wss://chatback1.herokuapp.com//8081"),f=new class{constructor(e,r){this.wsConnect=r,this.areaForChat=document.querySelector("."+e),this.init()}init(){window.localStorage.user?(window.localStorage.user=null,this.showRegistered()):this.showRegistered()}renderUserList(e){const r=document.querySelector(".userlist"),t=[];e.forEach((e=>{t.push(`<li class="userlist__item">${e}</li>`)})),r.innerHTML=t.join("")}showRegistered(){this.areaForChat.innerHTML='\n            <form action="" class="form-register">\n                <label for="username">Имя пользователя: </label>\n                <input type="text" name="username" class="form-register-username">\n                <button class="form-register-send">Зарегистрироваться в чате</button>\n            </form>',this.formRegister=document.querySelector(".form-register"),this.formRegisterUsername=document.querySelector(".form-register-username"),this.formRegister.addEventListener("submit",(e=>{e.preventDefault(),this.wsConnect.registerUser(this.formRegisterUsername.value)}))}showChatSpace(e){const r=[];e.forEach((e=>{r.push(`<li class="userlist__item">${e}</li>`)}));const t=`\n        <div class="chat">\n            <ul class="userlist">\n            ${r.join("")}\n            </ul>\n            <div class="chat-message">\n                <ul class="chat-message__list">\n                \n                </ul>\n                <form class="chat-message__form">\n                    <input type="text" class="chat-message__input">\n                    <button class="chat-message__send">Отправить</button>\n                </form>\n            </div>\n            </div>\n            `;this.areaForChat.innerHTML=t,this.chatMessageInput=document.querySelector(".chat-message__input"),this.chatMessageList=document.querySelector(".chat-message__list"),document.querySelector(".chat-message__form").addEventListener("submit",(e=>{e.preventDefault(),this.wsConnect.sendMessage({message:this.chatMessageInput.value,user:window.localStorage.user})})),console.log("открыт чат",e)}showIncorrectUser(){this.areaForChat.append("Пользователь уже существует, введите другое имя")}addMessage(e){this.chatMessageInput.value="";let r=document.createElement("li");r.classList.add("chat-message__item"),e.user==window.localStorage.user&&r.classList.add("chat-message_my-message"),r.innerHTML=`<h4 class="message-user">${e.user}</h4> <p class="message-text">${e.message}</p><p class="message-date">${(new Date).toUTCString()}</p>`,this.chatMessageList.append(r)}}("chat-area",g);g.addChat(f)})()})();