import { Keyboard } from "./keyboad.js";
import {setter} from "./setAnim.js";

document.addEventListener("keydown", function(event) {
    event.preventDefault();
    if (event.shiftKey && event.altKey) {
        Keyboard.properties.lan = (Keyboard.properties.lan == "eng") ? "ru":"eng";
        localStorage.setItem("myKey",Keyboard.properties.lan);
        document.querySelector(".keyboard").remove();
        Keyboard.init();
    }
});


window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
    Keyboard.initText();
    setter();
});
window.onload = function() {
    document.querySelector(".puk").focus();
  };
document.onclick = function() {
    document.querySelector(".puk").focus();
   };