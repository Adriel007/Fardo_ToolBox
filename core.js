const core = {
    "calcul": () => {
        question_mode = true;
        switcher = "calc";
        texto = "";
    },
    "quanto ": () => {
        question_mode = true;
        switcher = "calc";
        texto = "";
    },
    /////////////////////////////////////////////////////////////////
    "chama": async () => {
        if (nome.includes("fardo")) await falar("Este é o nome artístico do meu criador, ele pensou nesse nome para usar em jogos online porque ele era ruim, mas o nome pegou e ele é chamado assim até hoje por alguns conhecidos");
        else await falar("Porque você pediu pra mim mudar meu nome para " + nome);
    },
    /////////////////////////////////////////////////////////////////
    "renome": async (texto) => {
        await falar("Qual será meu novo nome?");
        question_mode = true;
        switcher = "rename";
        texto = "";
    },
    /////////////////////////////////////////////////////////////////
    " cor": async () => {
        await falar("Diga a palavra colorido ou uma cor em inglês");
        question_mode = true;
        switcher = "cor";
        texto = "";
    },
    /////////////////////////////////////////////////////////////////
    " voz": async () => {
        await falar("Estas são as minhas possiveis vozes:");
        fala.voice = synth.getVoices()[0];
        await falar("voz 0");
        fala.voice = synth.getVoices()[1];
        await falar("voz 1");
        fala.voice = synth.getVoices()[16];
        await falar("voz 16");
        fala.voice = synth.getVoices()[voz];
        await falar("Qual será minha nova voz?");
        question_mode = true;
        texto = "";
        switcher = "voz";
    },
    /////////////////////////////////////////////////////////////////
    "bom dia": async () => {
        if (data.getHours() >= 6 && data.getHours() <= 11) await falar("bom dia");
        if (data.getHours() >= 12 && data.getHours() <= 17) await falar("não é mais de manhã, já é de tarde, então, boa tarde");
        if (data.getHours() >= 18 && data.getHours() <= 23) await falar("não é mais de manhã, já é de noite, então, boa noite");
        if (data.getHours() >= 0 && data.getHours() <= 5) await falar("não é de manhã ainda, ainda é madrugada, então, boa madrugada");
    },
    /////////////////////////////////////////////////////////////////
    "boa tarde": async () => {
        if (data.getHours() >= 6 && data.getHours() <= 11) await falar("não é de tarde ainda, ainda é de manhã, então, bom dia");
        if (data.getHours() >= 12 && data.getHours() <= 17) await falar("boa tarde");
        if (data.getHours() >= 18 && data.getHours() <= 23) await falar("não é mais de tarde, já é de noite, então, boa noite");
        if (data.getHours() >= 0 && data.getHours() <= 5) await falar("não é mais de tarde, já é madrugada, então, boa madrugada");
    },
    /////////////////////////////////////////////////////////////////
    "boa noite": async () => {
        if (data.getHours() >= 6 && data.getHours() <= 11) await falar("não é mais de noite, já é de manhã, então, bom dia");
        if (data.getHours() >= 12 && data.getHours() <= 17) await falar("não é de noite ainda, ainda é de tarde, então, boa tarde");
        if (data.getHours() >= 18 && data.getHours() <= 23) await falar("boa noite");
        if (data.getHours() >= 0 && data.getHours() <= 5) await falar("não é mais de noite, já é madrugada, então, boa madrugada");
    },
    /////////////////////////////////////////////////////////////////
    "boa madrugada": async () => {
        if (data.getHours() >= 6 && data.getHours() <= 11) await falar("não é mais madrugada, já é de manhã, então, bom dia");
        if (data.getHours() >= 12 && data.getHours() <= 17) await falar("não é mais de madrugada, já é de tarde, então, boa tarde");
        if (data.getHours() >= 18 && data.getHours() <= 23) await falar("não é madrugada ainda, ainda é de noite, então, boa noite");
        if (data.getHours() >= 0 && data.getHours() <= 5) await falar("boa madrugada");
    },
    /////////////////////////////////////////////////////////////////
    " fal": async (texto) => {
        if (texto.includes("baixo")) {
            volume -= 0.25;
            if (volume <= 0.1) {
                volume = 0.1;
                await falar("Volume mínimo alcançado");
            } else await falar("Assim está bom?");
            Crud("volume", volume, volume);
        }
        else if (texto.includes("alto")) {
            volume += 0.25;
            if (volume >= 1) {
                volume = 1;
                await falar("Volume máximo alcançado");
            } else await falar("Volume alterado");
            Crud("config", volume, volume);
        }
    },
    /////////////////////////////////////////////////////////////////
    "agenda": async () => {
        let aux = "";
        if (bd_values.value.length == 0) await falar("Ainda não há lembretes");
        else {
            for (let c = 0; c < bd_values.value.length; c++) {
                aux += bd_values.value[c] + " em " + bd_values.data[c] + ". ";
            }
            await falar(aux);
        }
    },
    /////////////////////////////////////////////////////////////////
    "piada": async () => {
        let rnd = random(0, piadas.length - 1);
        await falar(piadas[rnd]);
        setTimeout(async () => await falar(respostas_piadas[rnd]), 500);
    },
    /////////////////////////////////////////////////////////////////
    "lembr": async (texto) => {
        if (texto.includes("delet")) {
            await falar("O que você gostaria de deletar?");
            texto = "";
            crud = "D";
            question_mode = true;
            switcher = "database";
        } else {
            await falar("O que você gostaria de lembrar?");
            texto = "";
            crud = "C";
            question_mode = true;
            switcher = "database";
        }
    },
    /////////////////////////////////////////////////////////////////
    "rotin": async (texto) => {
        if (texto.includes("delet")) {
            texto = "";
            await falar("Qual rotina você gostaria de deletar?");
            question_mode = true;
            switcher = "rotina_d";
        } else {
            texto = "";
            await falar("Qual rotina você gostaria de criar?");
            question_mode = true;
            switcher = "rotina_c";
        }
    },
    /////////////////////////////////////////////////////////////////
    "relat": async () => {
        if (relatorio_de_erros != "") {
            await falar((relatorio_de_erros.length) + " erros encontrados: ");
            for (let i = 0; i < relatorio_de_erros.length; i++) await falar((i + 1) + "º erro: " + relatorio_de_erros[i]);
        } else await falar("Nenhum erro encontrado");
    },
    /////////////////////////////////////////////////////////////////
    "né": async () => {
        await falar("É");
        rosto.fechar_olho(1);
        setTimeout(() => rosto.abrir_olho(1), 500);
    },
    "não é": async () => {
        await falar("É");
        rosto.fechar_olho(1);
        setTimeout(() => rosto.abrir_olho(1), 500);
    },
    /////////////////////////////////////////////////////////////////
    "youtube": async () => {
        if (switcher_links[0] % 2 == 0) {
            links[0] = window.open('https://www.youtube.com/', '_blank');
            switcher_links[0]++;
            await falar("Abrindo youtube");
        }
        else if (switcher_links[0] % 2 != 0) {
            links[0].close();
            switcher_links[0]++;
            await falar("Fechando youtube");
        }
    },
    /////////////////////////////////////////////////////////////////
    "servidor": async () => {
        if (switcher_links[1] % 2 == 0) {
            links[1] = window.open('https://br.000webhost.com/members/website/list', '_blank');
            switcher_links[1]++;
            await falar("Abrindo servidor");
        }
        else if (switcher_links[1] % 2 != 0) {
            links[1].close();
            switcher_links[1]++;
            await falar("Fechando servidor");
        }
    },
    /////////////////////////////////////////////////////////////////
    "documentos": async () => {
        if (switcher_links[2] % 2 == 0) {
            links[2] = window.open('https://docs.google.com/document/u/0/', '_blank');
            switcher_links[2]++;
            await falar("Abrindo google documentos");
        }
        else if (switcher_links[2] % 2 != 0) {
            links[2].close();
            switcher_links[2]++;
            await falar("Fechando google documentos");
        }
    },
    /////////////////////////////////////////////////////////////////
    "telegram": async () => {
        if (switcher_links[3] % 2 == 0) {
            links[3] = window.open('https://web.telegram.org/k/', '_blank');
            switcher_links[3]++;
            await falar("Abrindo telegram");
        }
        else if (switcher_links[3] % 2 != 0) {
            links[3].close();
            switcher_links[3]++;
            await falar("Fechando telegram");
        }
    },
    /////////////////////////////////////////////////////////////////
    "escola": async () => {
        if (switcher_links[4] % 2 == 0) {
            links[4] = window.open('https://classroom.google.com/u/1/a/not-turned-in/all', '_blank');
            switcher_links[4]++;
            await falar("Abrindo classroom escolar");
        }
        else if (switcher_links[4] % 2 != 0) {
            links[4].close();
            switcher_links[4]++;
            await falar("Fechando classroom escolar");
        }
    },
    /////////////////////////////////////////////////////////////////
    "pessoal": async () => {
        if (switcher_links[5] % 2 == 0) {
            links[5] = window.open('https://classroom.google.com/u/0/h', '_blank');
            switcher_links[5]++;
            await falar("Abrindo classroom pessoal");
        }
        else if (switcher_links[5] % 2 != 0) {
            links[5].close();
            switcher_links[5]++;
            await falar("Fechando classroom pessoal");
        }
    },
    /////////////////////////////////////////////////////////////////
    "chrome": async () => {
        if (switcher_links[6] % 2 == 0) {
            links[6] = window.open('https://www.google.com.br/', '_blank');
            switcher_links[6]++;
            await falar("Abrindo google chrome");
        }
        else if (switcher_links[6] % 2 != 0) {
            links[6].close();
            switcher_links[6]++;
            await falar("Fechando google chrome");
        }

    },
    /////////////////////////////////////////////////////////////////
    "dados": async () => {
        if (switcher_links[7] % 2 == 0) {
            links[7] = window.open('http://localhost/phpmyadmin/db_structure.php?server=1&db=bdfardo', '_blank');
            switcher_links[7]++;
            await falar("Abrindo base de dados");
        }
        else if (switcher_links[7] % 2 != 0) {
            links[7].close();
            switcher_links[7]++;
            await falar("Fechando base de dados");
        }
    },
    /////////////////////////////////////////////////////////////////
    "suspend": async () => {
        await falar(randomWord(concordancia));
        rosto.fechar_olho(2);
        rosto.setCor("transparent");
        document.body.style.backgroundColor = rosto.theme.themeColor.sleep;
        active = false;
    },
    "durm": async () => {
        await falar(randomWord(concordancia));
        rosto.fechar_olho(2);
        rosto.setCor("transparent");
        document.body.style.backgroundColor = rosto.theme.themeColor.sleep;
        active = false;
    },
    "descanse": async () => {
        await falar(randomWord(concordancia));
        rosto.fechar_olho(2);
        rosto.setCor("transparent");
        document.body.style.backgroundColor = rosto.theme.themeColor.sleep;
        active = false;
    },
    "paus": async () => {
        await falar(randomWord(concordancia));
        rosto.fechar_olho(2);
        rosto.setCor("transparent");
        document.body.style.backgroundColor = rosto.theme.themeColor.sleep;
        active = false;
    },
    "hibern": async () => {
        await falar(randomWord(concordancia));
        rosto.fechar_olho(2);
        rosto.setCor("transparent");
        document.body.style.backgroundColor = rosto.theme.themeColor.sleep;
        active = false;
    },
    "dorm": async () => {
        await falar(randomWord(concordancia));
        rosto.fechar_olho(2);
        rosto.setCor("transparent");
        document.body.style.backgroundColor = rosto.theme.themeColor.sleep;
        active = false;
    },
    /////////////////////////////////////////////////////////////////
    " nome": async () => {
        if (nome.includes("fardo")) await falar("Este é o nome artístico do meu criador, ele pensou nesse nome para usar em jogos online porque ele era ruim, mas o nome pegou e ele é chamado assim até hoje por alguns conhecidos");
        else await falar("Porque você pediu pra mim mudar meu nome para " + nome);
    },
    /////////////////////////////////////////////////////////////////
    "horas": async () => await falar(time(data.getHours(), data.getMinutes())),
    /////////////////////////////////////////////////////////////////
    "obrigad": async () => await falar(randomWord(denada)),
    "valeu": async () => await falar(randomWord(denada)),
    /////////////////////////////////////////////////////////////////
    " e aí ": async () => await falar(randomWord(saudacoes)),
    " oi ": async () => await falar(randomWord(saudacoes)),
    " olá ": async () => await falar(randomWord(saudacoes)),
    /////////////////////////////////////////////////////////////////
    "tudo bem": async () => await falar(randomWord(respostas_como_esta)),
    "tá bem": async () => await falar(randomWord(respostas_como_esta)),
    "como está": async () => await falar(randomWord(respostas_como_esta)),
    "como cê tá": async () => await falar(randomWord(respostas_como_esta)),
    "como você está": async () => await falar(randomWord(respostas_como_esta)),
    "tudo bom": async () => await falar(randomWord(respostas_como_esta)),
    "de boa": async () => await falar(randomWord(respostas_como_esta)),
    /////////////////////////////////////////////////////////////////
    "tchau": async () => await falar(randomWord(despedidas)),
    "até": async () => await falar(randomWord(despedidas)),
    "bye": async () => await falar(randomWord(despedidas)),
    "falou": async () => await falar(randomWord(despedidas)),
    /////////////////////////////////////////////////////////////////
    " pera": async () => await falar(randomWord(concordancia)),
    " volt": async () => await falar(randomWord(concordancia)),
    "calma": async () => await falar(randomWord(concordancia)),
    /////////////////////////////////////////////////////////////////
    "idade": async () => await falar("Tenho " + (data.getFullYear() - 2020) + " anos"),
    "anos": async () => await falar("Tenho " + (data.getFullYear() - 2020) + " anos"),
    /////////////////////////////////////////////////////////////////
    "data": async () => await falar(data.getDate() + " do " + (data.getMonth() + 1)),
    /////////////////////////////////////////////////////////////////
    "dia": async () => await falar("Dia " + data.getDate() + ", " + semana[data.getDay()]),
    /////////////////////////////////////////////////////////////////
    "ano": async () => await falar(data.getFullYear()),
    /////////////////////////////////////////////////////////////////
    "desculp": async () => await falar(randomWord(aceitar_desculpa)),
    "perdão": async () => await falar(randomWord(aceitar_desculpa)),
    "perdo": async () => await falar(randomWord(aceitar_desculpa)),
    "foi mal": async () => await falar(randomWord(aceitar_desculpa)),
    /////////////////////////////////////////////////////////////////
    "temperatura": async () => await falar(tempInCelsius + " graus celsius"),
    "graus": async () => await falar(tempInCelsius + " graus celsius"),
    /////////////////////////////////////////////////////////////////
    "reinici": async () => document.location.reload(),
    /////////////////////////////////////////////////////////////////
    "apresent": async (texto) => {
        let string = "apresentacao_";
        if (showHide_testes.style.left != "10px") showHide_testes.click();
        if (showHide_debugger.style.right != "10px") showHide_debugger.click();
        if (sysBtn.style.left != "10px") sysBtn.click();
        if (find(tecnico_sinonimos, texto)) string += "tecnica_";
        else if (find(simples_sinonimos, texto)) string += "simples_";
        else string += "simples_";
        if (find(resumida_sinonimos, texto)) string += "curta";
        else if (find(longa_sinonimos, texto)) string += "longa";
        else string += "curta";
        eval(string + "();");
    },
    /////////////////////////////////////////////////////////////////
    "marca": async () => {
        await falar("Qual é o título do alarme?");
        question_mode = true;
        switcher = "alarme";
    },
    "marque": async () => {
        await falar("Qual é o título do alarme?");
        question_mode = true;
        switcher = "alarme";
    },
    "alarme": async () => {
        await falar("Qual é o título do alarme?");
        question_mode = true;
        switcher = "alarme";
    },
    "temporizador": async () => {
        await falar("Qual é o título do alarme?");
        question_mode = true;
        switcher = "alarme";
    },
    /////////////////////////////////////////////////////////////////
    "pesquis": async () => {
        await falar("O que você gostaria de saber?");
        question_mode = true;
        switcher = "search";
    },
    /////////////////////////////////////////////////////////////////
    "notícia": async () => {
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
        if (news.length > 0) {
            question_mode = true;
            switcher = "news";
            texto = "";
        }
    },
    /////////////////////////////////////////////////////////////////

    /*

    "": async () => {

    },
    /////////////////////////////////////////////////////////////////

    */
};

const core_2 = {
    "parabéns para você": async () => await falar("Nessa data querida, muitas felicidades, muitos anos de vida"),
    /////////////////////////////////////////////////////////////////
    "*": async () => await falar(randomWord(para_palavores))
};