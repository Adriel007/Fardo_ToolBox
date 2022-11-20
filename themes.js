function themes() {
    debuggerPanel("themes");
    rosto.theme.themeColor.setCor = color;
    if ((data.getDate() >= 24 && (data.getMonth() + 1) == 10) || (data.getDate() <= 7 && (data.getMonth() + 1) == 11)) {
        //hallowen
        hallowen();
    }
    else if ((data.getDate() >= 18 && data.getDate() <= 30) && (data.getMonth() + 1) == 12) {
        //natal
        natal();
    }

    else {
        //nada
        normal();
    }
}

function hallowen() {
    rosto.theme = theme.hallowen;
    rosto.themeDefine();
    rosto.setCor(rosto.theme.themeColor.setCor);
    rosto.piscar(2);
}

function natal() {
    rosto.theme = theme.natal;
    rosto.themeDefine();
    rosto.setCor(rosto.theme.themeColor.setCor);
    rosto.piscar(2);
}

function normal() {
    rosto.theme = theme.normal;
    rosto.setCor(rosto.theme.themeColor.setCor);
    rosto.themeDefine();
    rosto.piscar(2);
}