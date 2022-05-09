import { Keyboard } from "./keyboad.js";
export function setter(){
document.addEventListener("keydown", function(event) {
    event.preventDefault();
    for (const key of Keyboard.elements.keys) {
        if(event.key == key.textContent && key.textContent!= "Backspace"&& key.textContent!= "Tab"&& key.textContent!= "Del"&& key.textContent!= "CapsLock"&& key.textContent!= "Enter"&& key.textContent!= "LShift"&& key.textContent!= "RShift"&& key.textContent!= "Ctrl"&& key.textContent!= "Win"&& key.textContent!= "Alt"&& key.textContent!= "Space")
        {
            event.preventDefault();
            key.classList.add("active");
            Keyboard.properties.value += key.textContent;
            setTimeout(function(){
                key.classList.remove("active");
            },100);
        }
        if(event.key == "Backspace" && key.textContent == "Backspace")
        {
            this.properties.value = this.properties.value.slice(0, this.elements.textarea.selectionStart-1) + this.properties.value.slice(this.elements.textarea.selectionStart);
            key.classList.add("active");
            setTimeout(function(){
                key.classList.remove("active");
            },100);
        }
        if(event.key == "Tab" && key.textContent == "Tab")
        {
            Keyboard.properties.value +="    ";
            event.preventDefault();
            key.classList.add("active");
            setTimeout(function(){
                key.classList.remove("active");
            },100);
        }
        if(event.key == "Delete" && key.textContent == "Del")
        {
            if(Keyboard.elements.textarea.selectionStart!=Keyboard.properties.value.length && Keyboard.properties.value.length!=0)
                Keyboard.properties.value = Keyboard.properties.value.slice(0, Keyboard.elements.textarea.selectionStart) + Keyboard.properties.value.slice(Keyboard.elements.textarea.selectionStart+1);
            key.classList.add("active");
            setTimeout(function(){
                key.classList.remove("active");
            },100);
        }
        if(event.key == "CapsLock" && key.textContent == "CapsLock")
        {
            Keyboard._toggleCapsLock();
            key.classList.toggle("keyboard__key--active", Keyboard.properties.capsLock);
            key.classList.add("active");
            setTimeout(function(){
                key.classList.remove("active");
            },100);
        }
        if(event.key == "Enter" && key.textContent == "Enter")
        {
            Keyboard.properties.value +="\n";
            key.classList.add("active");
            setTimeout(function(){
                key.classList.remove("active");
            },100);
        }
        if(event.key == "Shift"&& event.location == 1 && key.textContent == "LShift")
        {
            key.classList.add("active");
            Keyboard.setShiftKeys();
        }
        if(event.key == "Shift"&& event.location == 2 && key.textContent == "RShift")
        {
            key.classList.add("active");
            Keyboard.setShiftKeys();
        }
        if(event.key == "Control"&& event.location == 1 && key.textContent == "Ctrl")
            document.querySelectorAll(".keyboard__key")[55].classList.add("active");
        if(event.key == "Control"&& event.location == 2 && key.textContent == "Ctrl")
            document.querySelectorAll(".keyboard__key")[63].classList.add("active");
        if(event.key == "Alt"&& event.location == 1 && key.textContent == "Alt")
            document.querySelectorAll(".keyboard__key")[57].classList.add("active");
        if(event.key == "Alt"&& event.location == 2 && key.textContent == "Alt")
            document.querySelectorAll(".keyboard__key")[59].classList.add("active");
        if(event.key == "ArrowUp" && key.textContent == "▲")
        {
            Keyboard.properties.value += key.textContent;
            key.classList.add("active");
            setTimeout(function(){
                key.classList.remove("active");
            },100);
        }
            if(event.key == "ArrowLeft" && key.textContent == "◄")
        {
            Keyboard.properties.value += key.textContent;
            key.classList.add("active");
            setTimeout(function(){
                key.classList.remove("active");
            },100);
        }
        if(event.key == "ArrowDown" && key.textContent == "▼")
        {
            Keyboard.properties.value += key.textContent;
            key.classList.add("active");
            setTimeout(function(){
                key.classList.remove("active");
            },100);
        }
        if(event.key == "ArrowRight" && key.textContent == "►")
        {
            Keyboard.properties.value += key.textContent;
            key.classList.add("active");
            setTimeout(function(){
                key.classList.remove("active");
            },100);
        } 

        document.querySelector(".puk").value=Keyboard.properties.value;
    }
});
document.addEventListener("keyup", function(event) {
    for (const key of Keyboard.elements.keys) {
        if(event.key == "Shift"){
        key.classList.remove("active");
        Keyboard.setNormalKeys();
        }
        if(event.key == "Control")
        key.classList.remove("active");
        if(event.key == "Alt")
        key.classList.remove("active");
    }});
}