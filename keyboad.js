export const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        textarea: null,
        keys: [],
        info: null,
        EngkeyLayout: [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
            "LShift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "RShift",
            "Ctrl", "Win", "Alt", "Space", "Alt", "◄", "▼", "►", "Ctrl"
        ],
        ShiftEngKeyLayout: [
            "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
            "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del",
            "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter",
            "LShift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "RShift",
            "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"
        ],
        ShiftRuKeyLayout: [
            "Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace",
            "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del",
            "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
            "LShift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "RShift",
            "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"
        ],
    },

    eventHandlers: {
        oninput: null,
    },

    properties: {
        value: "",
        capsLock: false,
        lan: "eng"
    },
    initText()
    {
        this.elements.info = document.createElement("div");
        this.elements.info.classList.add("text");
        this.elements.info.innerHTML = "<p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левыe shift + alt</p><p>(Если что-то не работает, попробуйте сменить язык раскладки и\\или отжать\\нажать CapsLock)</p>";
        this.elements.textarea = document.createElement("textarea");
        this.elements.textarea.classList.add("puk");
        document.body.appendChild(this.elements.textarea);
        document.body.appendChild(this.elements.info);
        this.elements.textarea.addEventListener("focus", () => {
            this.open(this.elements.textarea.value, currentValue => {
                this.elements.textarea.value = currentValue;
            });
        });
    
    },
    init() {
        if(localStorage.getItem("myKey")=="eng"||localStorage.getItem("myKey")=="ru")
        this.properties.lan = localStorage.getItem("myKey");
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        let keyLayout = [];
        if(this.properties.lan == "eng")
        keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
            "LShift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "RShift",
            "Ctrl", "Win", "Alt", "Space", "Alt", "◄", "▼", "►", "Ctrl"
        ];

        else if(this.properties.lan == "ru")
        keyLayout = [
            "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del",
            "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
            "LShift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "RShift",
            "Ctrl", "Win", "Alt", "Space", "Alt", "◄", "▼", "►", "Ctrl"
        ];

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["Backspace", "Del", "Enter", "RShift"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "Backspace":
                    keyElement.textContent = key;
                    keyElement.classList.add("keyboard__key--wide");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.slice(0, this.elements.textarea.selectionStart-1) + this.properties.value.slice(this.elements.textarea.selectionStart);
                        this._triggerEvent("oninput");
                    });

                    break;
                case "Del":
                    keyElement.textContent = key;
                        keyElement.addEventListener("click", () => {
                        if(this.elements.textarea.selectionStart!=this.properties.value.length && this.properties.value.length!=0)
                        { 
                        this.properties.value = this.properties.value.slice(0, this.elements.textarea.selectionStart) + this.properties.value.slice(this.elements.textarea.selectionStart+1);
                        this._triggerEvent("oninput");
                        }
                    });
    
                        break;
                case "CapsLock":
                    keyElement.textContent = key;
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "Enter":
                    keyElement.textContent = key;
                    keyElement.classList.add("keyboard__key--wide");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "Space":
                    keyElement.textContent = " ";
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;
                    case "Tab":
                        keyElement.textContent = key;
                        keyElement.addEventListener("click", () => {
                            this.properties.value += "    ";
                            this._triggerEvent("oninput");
                        });
    
                        break;
                    case "Win":
                            keyElement.textContent = key;
                            keyElement.addEventListener("click", () => {
                                this._triggerEvent("oninput");
                            });
        
                        break;
                        case "Alt":
                            keyElement.textContent = key;
                            keyElement.addEventListener("click", () => {
                                this._triggerEvent("oninput");
                            });
        
                        break;
                        case "Ctrl":
                            keyElement.textContent = key;
                            keyElement.addEventListener("click", () => {
                                this._triggerEvent("oninput");
                            });
        
                        break;
                        case "RShift":
                            keyElement.textContent = key;
                            keyElement.addEventListener("click", () => {
                                this._triggerEvent("oninput");
                            });
        
                        break;
                        case "LShift":
                            keyElement.textContent = key;
                            keyElement.addEventListener("click", () => {
                                this._triggerEvent("oninput");
                            });
        
                        break;
                    default:
                    keyElement.textContent = key;
                    keyElement.id = `${this.elements.EngkeyLayout[keyLayout.indexOf()]}`;
                    keyElement.addEventListener("click", () => {
                        this.properties.value += keyElement.textContent;
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        for (const key of this.elements.keys) {
            if (key.textContent!= "Backspace"&& key.textContent!= "Tab"&& key.textContent!= "Del"&& key.textContent!= "CapsLock"&& key.textContent!= "Enter"&& key.textContent!= "LShift"&& key.textContent!= "RShift"&& key.textContent!= "Ctrl"&& key.textContent!= "Win"&& key.textContent!= "Alt" && key.textContent!= "Space") {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
    },

    setShiftKeys()
    {
        let key;
        for(let i = 0; i<64; i++)
        {
            key = document.querySelectorAll(".keyboard__key")[i];
            if(key.textContent!= "Backspace"&& key.textContent!= "Tab"&& key.textContent!= "Del"&& key.textContent!= "CapsLock"&& key.textContent!= "Enter"&& key.textContent!= "LShift"&& key.textContent!= "RShift"&& key.textContent!= "Ctrl"&& key.textContent!= "Win"&& key.textContent!= "Alt" && key.textContent!= "Space")
            key.textContent = this.properties.lan == "eng"?this.elements.ShiftEngKeyLayout[i]:this.elements.ShiftRuKeyLayout[i];
        }
    },
    setNormalKeys(){
        let keyLayout;
        let key;
        if(this.properties.lan == "eng")
        keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
            "LShift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "RShift",
            "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"
        ];

        else if(this.properties.lan == "ru")
        keyLayout = [
            "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del",
            "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
            "LShift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "RShift",
            "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"
        ];
        for(let i = 0; i<64; i++)
        {
            key = document.querySelectorAll(".keyboard__key")[i];
            if(key.textContent!= "Backspace"&& key.textContent!= "Tab"&& key.textContent!= "Del"&& key.textContent!= "CapsLock"&& key.textContent!= "Enter"&& key.textContent!= "LShift"&& key.textContent!= "RShift"&& key.textContent!= "Ctrl"&& key.textContent!= "Win"&& key.textContent!= "Alt" && key.textContent!= "Space")
            key.textContent = keyLayout[i];
        }
    }
};

