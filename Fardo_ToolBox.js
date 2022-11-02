/*

MODO DE USO:  
<script src="Fardo_ToolBox.js"></script>
FardoTools.metodo(parametros);

EXEMPLO:
FardoTools.html("span", "id", "teste", "Olá mundo");
FardoTools.html("span", ["id","class"], ["teste","classeTeste"], "Olá mundo");
FardoTools.css(document.getElementById("teste"), "color: red; font-size: 25px; font-weight: bold;");


*/

class Fardo_ToolBox {
    css(element, css) {
        let cssKey = element.toString();
        cssKey = cssKey.replace(/./g, "");
        cssKey = cssKey.replace(/'/g, "");
        cssKey = cssKey.replace(/"/g, '');
        cssKey = cssKey.replace(/;/g, "");
        cssKey = cssKey.replace(/\(/g, "");
        cssKey = cssKey.replace(/\)/g, "");
        cssKey = cssKey.replace(/\[/g, "");
        cssKey = cssKey.replace(/\]/g, "");
        cssKey = cssKey.replace(/ /g, "");
        var elementsStyles = {};
        if (elementsStyles.style == undefined) elementsStyles.cssKey = css;
        else elementsStyles.cssKey += css;
        element.style = elementsStyles.cssKey;
    }
    html(tag, attr, attrValues, textContent, where) {
        let el = document.createElement(tag);
        if (attr != "" && attrValues != "") {
            if (Array.isArray(attr)) {
                for (let c = 0; c < attr.length; c++)
                    el.setAttribute(attr[c], attrValues[c]);
            } else el.setAttribute(attr, attrValues);
            if (Array.isArray(textContent)) {
                for (let c = 0; c < textContent.length; c++)
                    el.textContent += textContent[c];
            } else el.textContent = textContent;
        }
        if (where == "") document.body.appendChild(el);
        else where.appendChild(el);
        return el;
    }
    collider(obj_1, obj_2, direction) {
        if (direction.toLowerCase() == "x") {
            let x1 = parseFloat(obj_1.style.left, 10);
            let x2 = parseFloat(obj_2.style.left, 10);
            let w1 = parseFloat(obj_1.style.width, 10);
            let w2 = parseFloat(obj_2.style.width, 10);
            return ((x1 + w1 / 2) >= (x2 - w2 / 2) && (x1 - w1 / 2) <= (x2 + w2 / 2));
        }
        else if (direction.toLowerCase() == "y") {
            let y1 = parseFloat(obj_1.style.top, 10);
            let y2 = parseFloat(obj_2.style.top, 10);
            let h1 = parseFloat(obj_1.style.height, 10);
            let h2 = parseFloat(obj_2.style.height, 10);
            return ((y1 + h1 / 2) >= (y2 - h2 / 2) && (y1 - h1 / 2) <= (y2 + h2 / 2));
        }
        else return undefined;
    }
    async typingEffect(container = document.body, prefix = "", text = "typing effect", sufix = "", delay = 1000, sufixBlink = true, sufixBlinkDelay = 500) {
        let blink;
        const blinkEffect = () => {
            let c = 1;
            container.textContent = container.textContent.slice(0, -1);
            blink = setInterval(() => {
                if (c % 2 == 0) container.textContent = container.textContent.slice(0, -1);
                else container.textContent += sufix;
                c++;
            }, sufixBlinkDelay);
        };
        container.textContent = prefix;
        await this.delay(delay);
        for (let c = 0; c < text.length; c++) {
            container.textContent = container.textContent.replace(sufix, "");
            container.textContent += text[c] + sufix;
            await this.delay(delay);
        }
        if (sufixBlink == true) {
            blinkEffect();
            return blink;
        }
    }
    delay(miliseconds) {
        return new Promise(resolve => setTimeout(resolve, miliseconds));
    }
    isInScreen(element) {
        return (element.scrollTop == window.scrollY && element.scrollLeft == window.scrollX);
    }
    async fardoIntro() {
        let element = this.html("div", "id", "fardoIntro", "", document.body);
        let h1 = this.html("h1", "id", "fardoH1", "", element);
        let h3 = this.html("h3", "id", "fardoH2", "", element);
        this.css(h3, `
            color: lime;
            transition: all ease-in-out .5s;
        `);
        this.css(element, "position: fixed; flex-direction: column; transition: all ease-in-out 1s; width: 100%; height: 100%; background-color: black; color: white; font-weight: bold; font-size: 400%; font-family: consolas; left: 0; top: 0; display: flex; margin: 0; align-items: center; justify-content: center;");
        let blink = await this.typingEffect(h1, "", "Fardo Company", "_", 200, true, 300);
        await this.delay(1000);
        clearInterval(blink);
        if (h1.textContent.includes("_")) h1.textContent = "Fardo Company";
        await this.typingEffect(h3, "", "O futuro já começou", "_", 200, true, 300);
        await this.delay(2500);
        element.style.opacity = "0";
        await this.delay(1001);
        element.remove();
        return true;
    }
};
const FardoTools = new Fardo_ToolBox;