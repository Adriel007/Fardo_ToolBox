function temperaturas() {
    debuggerPanel("temperaturas");
    switcher_temperatura = false;
    if (tempInCelsius < 10) {
        memoria.push("Hoje está muito frio, ideal para não sair de debaixo das cobertas");
    }
    else if ((tempInCelsius >= 10 && tempInCelsius < 20)) {
        memoria.push("Hoje está frio, é bom usar um casaco");
    }
    else if ((tempInCelsius >= 20 && tempInCelsius < 25)) {
        memoria.push("A temperatura hoje está agradável");
    }
    else if ((tempInCelsius >= 25 && tempInCelsius < 30)) {
        memoria.push("Hoje está quente, roupas finas e leves são uma ótima opção");
    }
    else if (tempInCelsius >= 30) {
        memoria.push("Hoje está muito quente, evite roupas pretas e hidrate-se bastante");
    }
}

function lembretes() {
    debuggerPanel("lembretes");
    switcher_lembretes = false;
    let string = "";
    let aux;
    let dat;
    let month;
    for (let c = 0; c < bd_values.value.length; c++) {
        aux = bd_values.data[c].replace(" dia ", "");
        aux = bd_values.data[c].split(" ");
        dat = aux[1];
        month = aux[aux.length - 2];
        if (data.getDate() == dat && data.getMonth() == mes.indexOf(" " + month + " ")) {
            string += bd_values.value[c] + ", ";
            Crud("D", bd_values.value[c], null);
        }
    }
    if (string != "") memoria.push("você tem os lembretes de: " + string + ". agendados para hoje");
}

function rotinas() {
    debuggerPanel("rotinas");
    switcher_rotinas = false;
    let string = "";
    for (let c = 0; c < bd_rotinas.descricao.length; c++) {
        if (data.getDate() == bd_rotinas.dia_ou_semana[c] || data.getDay() == semana.indexOf(bd_rotinas.dia_ou_semana[c]))
            string += bd_rotinas.descricao[c] + " as " + bd_rotinas.hora[c] + ", ";
    }
    if (string != "") memoria.push("Hoje você tem as rotinas de: " + string);
}

async function datas() {
    debuggerPanel("datas");
    switcher_data = false;
    if ((data.getDate() == 20 && (data.getMonth() + 1) == 08)) {
        memoria.push("Parabéns Adriel pelos seus " + (data.getFullYear() - 2005) + " anos, desejo-lhe felicidades");
    }
    if ((data.getDate() == 16 && (data.getMonth() + 1) == 01)) {
        memoria.push("Parabéns Beatriz pelos seus " + (data.getFullYear() - 2008) + " anos, desejo-lhe felicidades");
    }
    if ((data.getDate() == 01)) {
        memoria.push(((data.getFullYear() - 2021) * 12) + ((data.getMonth() + 1) - 05) + " meses");
    }
    if ((data.getDate() == 24 && (data.getMonth() + 1) == 12)) {
        memoria.push("Feliz véspera de natal");
    }
    if ((data.getDate() == 25 && (data.getMonth() + 1) == 12)) {
        memoria.push("Feliz natal, Ho Ho Ho");
    }
    if ((data.getDate() == 1 && (data.getMonth() + 1) == 01)) {
        memoria.push("Feliz ano novo, " + data.getFullYear() + " chegou");
    }
    if ((data.getDate() == 9 && (data.getMonth() + 1) == 04)) {
        memoria.push("Feliz páscoa, eu acho que vi um coelhinho");
    }
    if ((data.getDate() == 31 && (data.getMonth() + 1) == 10)) {
        memoria.push("Feliz e assustador dia das bruxas");
    }
    if ((data.getDate() == 14 && (data.getMonth() + 1) == 02)) {
        memoria.push("Feliz dia dos namorados, o amor esta no ar");
    }
    if ((data.getDate() == 14 && (data.getMonth() + 1) == 08)) {
        memoria.push("Feliz dia dos pais Adriel, meu criador");
    }
    if ((data.getDate() == 14 && (data.getMonth() + 1) == 05)) {
        memoria.push("Feliz dia das mães");
    }
    if ((data.getDate() < 3)) {
        memoria.push("Não se esqueça de imprimir o boleto da fortec, vence dia 3");
    }
}

async function speakAll() {
    debuggerPanel("speakAll");
    memoriaSpeak = false;
    //evitar redundâncias
    memoria = memoria.filter((v,i) => memoria.indexOf(v) == i);
    for (let c = 0; c < memoria.length; c++) {
        await falar(memoria[c]);
    }
    memoria = [];
}