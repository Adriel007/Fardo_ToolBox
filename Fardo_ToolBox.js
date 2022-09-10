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
    }
};
const FardoTools = new Fardo_ToolBox;