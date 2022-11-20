class Rosto {
    constructor(R_E, L_E, boca, cor, theme) {
        this.R_E = R_E;
        this.L_E = L_E;
        this.boca = boca;
        this.cor = cor;
        this.theme = theme;
    }
    setCor(cor) {
        debuggerPanel("rosto-setCor");
        document.documentElement.style.setProperty('--cor', cor);
        this.cor = cor;
    }
    themeDefine() {
        document.body.style.backgroundColor = this.theme.themeColor.bg;
        this.R_E.style.color = this.theme.themeColor.fg;
        this.L_E.style.color = this.theme.themeColor.fg;
        this.boca.style.color = this.theme.themeColor.fg;
    }
    abrir_olho(n) {
        debuggerPanel("rosto-abrir_olho");
        if (n == 0) this.R_E.textContent = this.theme.eyesOpened;
        if (n == 1) this.L_E.textContent = this.theme.eyesOpened;
        else {
            this.R_E.textContent = this.theme.eyesOpened;
            this.L_E.textContent = this.theme.eyesOpened;
        }
    }
    fechar_olho(n) {
        debuggerPanel("rosto-fechar_olho");
        if (n == 0) this.R_E.textContent = this.theme.eyesClosed;
        if (n == 1) this.L_E.textContent = this.theme.eyesClosed;
        else {
            this.R_E.textContent = this.theme.eyesClosed;
            this.L_E.textContent = this.theme.eyesClosed;
        }
    }
    abrir_boca() {
        debuggerPanel("rosto-abrir_boca");
        this.boca.textContent = this.theme.mouthOpened;
    }
    fechar_boca() {
        debuggerPanel("rosto-fechar_boca");
        this.boca.textContent = this.theme.mouthClosed;
    }
    piscar() {
        debuggerPanel("rosto-piscar");
        this.fechar_olho(2);
        setTimeout(() => this.abrir_olho(2), 300);
    }
};