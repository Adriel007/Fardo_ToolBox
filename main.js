async function main(texto) {
    debuggerPanel("main");
    user = true;
    texto = " " + texto + " ";
    if (question_mode == false && nome.includes("fardo")) texto = fix(texto); //troca palavras parecidas com fardo por fardo
    log(texto + " /// " + data.getHours() + ":" + data.getMinutes());
    //document.cookie = "jsvaluetophpfardo=" + "";
    //mecanismo para crud
    if (active == false) {
        if (texto.includes(" acord") && texto.includes(nome)) {
            active = true;
            rosto.abrir_olho(2);
            rosto.setCor(rosto.theme.themeColor.setCor);
            document.body.style.backgroundColor = rosto.theme.themeColor.bg;
            await falar(saudacoes[random(0, saudacoes.length - 1)]);
        }
    } else {
        recognition.onend = async () => {
            if (question_mode == true && texto != "" && saveEnergy == false) {
                debuggerPanel("question-mode");
                if (switcher == "database") {
                    debuggerPanel("database");
                    switcher_bd_query_delete = false;
                    for (let c = 0; c < bd_values.value.length; c++) {
                        if (bd_values.value[c].includes(texto)) switcher_bd_query_delete = true;
                    }

                    if (texto != "" && tmp == "") {
                        tmp = texto;
                        texto = "";
                        if (crud == "C") await falar("quando quer que eu te lembre isso?");
                        if (crud == "D") texto = tmp;
                    }
                    if (texto != "" && tmp != "") {
                        if (crud == "C") {
                            bd_values.value.push(tmp);
                            bd_values.data.push(texto);
                            if (containsNumber(texto) == true && mes.some(aux => texto.includes(aux))) await falar("lembrete salvo.");
                            else await falar("O lembrete foi salvo, porém a data não segue o padrão de dia e mês, logo, não há como notificar você sobre ele");
                        }
                        if (crud == "D") {
                            for (let i = bd_values.value.length - 1; i >= 0; i--) {
                                if (bd_values.value[i].search(tmp) >= 0) {
                                    bd_values.value.splice(i, 1);
                                    bd_values.data.splice(i, 1);
                                }
                            }
                            if (switcher_bd_query_delete == true) await falar("lembrete deletado");
                            if (switcher_bd_query_delete == false) await falar("lembrete não encontrado");
                        }
                        question_mode = false;
                        switcher = "";
                        Crud(crud, tmp, texto);
                        tmp = "";
                    }
                }
                if (switcher == "rename") {
                    debuggerPanel("renomear");
                    nome = texto;
                    Crud("nome", nome, nome);
                    await falar("Nome alterado");
                    question_mode = false;
                    switcher = "";
                }
                if (switcher == "voz") {
                    debuggerPanel("voz");
                    novaVoz = parseInt(texto, 10);
                    if (texto.includes("zero")) novaVoz = 0;
                    if (novaVoz != 0 && novaVoz != 1 && novaVoz != 16) {
                        novaVoz = voz;
                        fala.voice = synth.getVoices()[voz];
                        await falar("Erro na alteração da voz");
                    } else {
                        voz = novaVoz;
                        fala.voice = synth.getVoices()[voz];
                        await falar("Voz alterada");
                    }
                    Crud("voz", voz + 1, voz + 1, null);
                    question_mode = false;
                    switcher = "";
                }
                if (switcher == "cor") {
                    debuggerPanel("cor");
                    if (sinonimos_colorido.some(aux => texto.includes(aux))) {
                        cor = texto.replace(/ /g, "");
                        Crud("cor", cor, cor);
                        color = cor;
                    } else {
                        cor = texto.replace(/ /g, "");
                        rosto.setCor(cor);
                        Crud("cor", cor, cor);
                        color = cor;
                    }
                    await falar("Cor alterada");
                    question_mode = false;
                    switcher = "";
                }
                if (switcher == "rotina_c") {
                    debuggerPanel("criar-rotina");
                    if (memoria.length == 0) {
                        memoria[0] = texto;
                        await falar("Que horas está rotina ocorrerá?");
                        texto = "";
                    }
                    else if (memoria.length == 1) {
                        memoria[1] = texto;
                        await falar("Qual dia do mês ou da semana essa rotina ocorrerá?");
                        texto = "";
                    }
                    else if (memoria.length == 2) {
                        memoria[2] = texto;
                        if (!(semana.some(aux => memoria[2].includes(aux))) && isNaN(memoria[2]))
                            await falar("Rotina não salva, formato do dia inválido");
                        else {
                            await falar("Rotina salva");
                            Crud("rotina_c", memoria[0], memoria[1], memoria[2]);
                        }
                        memoria = [];
                        question_mode = false;
                        switcher = "";
                    }
                }
                if (switcher == "rotina_d") {
                    debuggerPanel("deletar-rotina");
                    if (bd_rotinas.descricao.includes(texto)) {
                        Crud("rotina_d", texto);
                        await falar("Rotina deletada");
                    } else await falar("Rotina não encontrada");
                    question_mode = false;
                    switcher = "";
                }
                if (switcher == "calc") {
                    debuggerPanel("calculadora");
                    let mathKey;
                    let toEval = "";
                    texto = wordToNumber(texto);
                    let sub = texto.split(" ");
                    sub.shift();
                    sub.length -= 1;
                    for (let c = 0; c < sub.length; c++) {
                        mathKey = Object.keys(math);
                        if (isNaN(sub[c]) && !find(mathKey, sub[c])) sub[c] = undefined;
                    }
                    sub = sub.filter(element => element !== undefined);
                    for (let c = 0; c < sub.length; c++) {
                        if (!isNaN(sub[c])) toEval += "(" + sub[c] + ")";
                        else {
                            for (let i = 0; i < Object.entries(math).length; i++) {
                                mathKey = Object.entries(math)[i];
                                if (sub[c].includes(mathKey[0])) toEval += mathKey[1];
                            }
                        }
                    }
                    if (eval(toEval) == undefined) await falar("Desculpe, " + nao_entendeu[random(0, nao_entendeu.length - 1)]);
                    else if (isNaN(eval(toEval)) || eval(toEval) == Infinity) await falar("Impossivel dizer ou calcular isso");
                    else await falar(eval(toEval));
                    question_mode = false;
                    switcher = "";
                }
                if (switcher == "alarme") {
                    debuggerPanel("alarme");
                    if (switcher_alarme == false) {
                        alarmes.titulo.push(texto);
                        switcher_alarme = true;
                        await falar("Quando o alarme será acionado?");
                    } else {
                        switcher_alarme = false;
                        texto = wordToNumber(texto);
                        let time = parseInt(texto, 10);
                        let index = alarmes.titulo.length - 1;
                        if (isNaN(time)) {
                            await falar("Erro para criar o tempo do alarme");
                            alarmes.titulo[index] = undefined;
                            question_mode = false;
                            switcher = "";
                        } else {
                            if (texto.includes(" hor")) time *= 3600000;
                            if (texto.includes("minut")) time *= 60000;
                            if (texto.includes("segund")) time *= 1000;
                            alarmes.func.push(setTimeout(async () => {
                                if (active == false) {
                                    active = true;
                                    rosto.abrir_olho(2);
                                    rosto.setCor(rosto.theme.themeColor.setCor);
                                    document.body.style.backgroundColor = rosto.theme.themeColor.bg;
                                }
                                await falar(alarmes.titulo[index]);
                                for (let c = 0; c <= 100; c++) {
                                    alarmeSong.currentTime = 0;
                                    alarmeSong.play();
                                    if (user || c >= 100) {
                                        alarmeSong.currentTime = 10.14;
                                        alarmes.func[index] = undefined;
                                        alarmes.titulo[index] = undefined;
                                        await falar("Alarme abortado");
                                        break;
                                    } else await FardoTools.delay(1000);
                                }
                            }, time));
                            await falar("Alarme criado");
                            question_mode = false;
                            switcher = "";
                        }
                    }
                }
                if (switcher == "search") {
                    debuggerPanel("search");
                    search(texto);
                    question_mode = false;
                    switcher = "";
                }
                if (switcher == "news") {
                    debuggerPanel("news");
                    if (find(afirmativas, texto) && news.length > 0) {
                        for (let c = 0; c < 5; c++) {
                            if (news[0] == undefined) {
                                await falar("Não há mais notícias");
                                question_mode = false;
                                switcher = "";
                                break;
                            } else if (news[0] != undefined) {
                                await falar(news[0]);
                                news.shift();
                                if (c == 4) {
                                    if (news.length > 0) await falar("Quer que eu continue com as notícias?");
                                    else {
                                        await falar("Não há mais notícias");
                                        question_mode = false;
                                        switcher = "";
                                        break;
                                    }
                                }
                            }
                        }
                    } else if (find(negativas, texto)) {
                        await falar(concordancia[random(0, concordancia.length - 1)]);
                        switcher = "";
                        question_mode = false;
                    }
                    texto = "";
                }

            }
            recognition.start();
        };
        //fim-mecanismo para crud
        if (question_mode == false) {
            debuggerPanel("core");
            let Core = [Object.keys(core), Object.keys(core_2)];
            let keyCore = [-1, -1];
            let textCore = [null, null];
            for (let c = 0; c < Core[0].length; c++) {
                textCore[0] = Object.entries(core)[c][0];
                if (texto.includes(textCore[0])) {
                    keyCore[0] = c;
                    break;
                }
            }
            for (let c = 0; c < Core[1].length; c++) {
                textCore[1] = Object.entries(core_2)[c][0];
                if (texto.includes(textCore[1])) {
                    keyCore[1] = c;
                    break;
                }
            }
            if (introHasEnd == true) {
                if (keyCore[0] >= 0 && texto.includes(nome)) Object.entries(core)[keyCore[0]][1](texto);
                else if (keyCore[1] >= 0) Object.entries(core_2)[keyCore[1]][1](texto);
                user_detected();
                texto = "";
            }

            /*
            else if (texto.includes(nome)) {
                await falar(nao_entendeu[random(0, nao_entendeu.length - 1)]);
            }
            */
        }
    }
    setTimeout(() => user = false, 5000);
}