<html lang="pt-BR">
<meta charset="UTF-8">

<head>
    <link rel="apple-touch-icon" sizes="180x180" href="logo.jpg">
    <link rel="icon" type="image/png" sizes="32x32" href="logo.jpg">
    <link rel="icon" type="image/png" sizes="16x16" href="logo.jpg">
    <link rel="mask-icon" href="logo.jpg" color="#000">
    <meta name="msapplication-TileColor" content="#000">
    <meta name="theme-color" content="#000">
    <title>Fardo Home</title>
    <style>
        :root {
            --cor: lime;
        }

        *::-webkit-scrollbar-track {
            background-color: white;
        }

        *::-webkit-scrollbar {
            width: 6px;
            background: black;
        }

        *::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background: var(--cor);
        }

        body {
            color: red;
            background: black;
            overflow: hidden;
            transition: all ease .5s;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .php {
            display: none;
        }

        video,
        canvas {
            margin-left: 230px;
            margin-top: 120px;
            position: absolute;
            visibility: hidden;
        }

        #canvasChart {
            border: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            position: initial;
            visibility: visible;
        }

        img[alt="www.000webhost.com"] {
            display: none;
        }

        #rosto {
            display: flex;
            align-items: flex-start;
            width: 100%;
            height: 110%;
            justify-content: center;
            animation-name: floating;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            position: absolute;
            color: white;
            font-weight: bold;
            font-size: 280px;
            color: #fff;
            text-shadow:
                0 0 7px #fff,
                0 0 10px #fff,
                0 0 21px #fff,
                0 0 42px var(--cor),
                0 0 82px var(--cor),
                0 0 92px var(--cor),
                0 0 102px var(--cor),
                0 0 151px var(--cor);
            transition: all ease 1s;
        }

        #boca {
            display: flex;
            align-self: flex-end;
        }

        #status {
            position: fixed;
            width: auto;
            height: auto;
            font-size: 20px;
            color: white;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: row;
            font-family: 'Segoe UI';
            background-color: rgba(0, 0, 0, .6);
        }

        #status span {
            margin: 10px;
        }

        #newsDiv {
            padding: 0;
            border: 0;
        }

        #newsIcon {
            margin: 0;
            padding: 0;
            line-height: 45px;
        }

        #news {
            position: absolute;
            margin: 0;
            background-color: red;
            color: white;
            font-weight: bold;
            padding: 1px;
            border-radius: 999px;
            font-size: 10px;
            width: 15px;
            height: 15px;
            text-align: center;
            translate: 18px -5px;
            display: none;
        }

        @keyframes floating {
            0% {
                transform: translate(0, 0px);
            }

            50% {
                transform: translate(0, 20px);
            }

            100% {
                transform: translate(0, 0px);
            }
        }

        #showHide_testes {
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 999px;
            box-shadow: 0 0 20px 5px var(--cor);
            color: white;
            font-size: 30px;
            width: 50px;
            height: 50px;
            position: absolute;
            transition: all 1s;
            left: 10px;
        }

        #showHide_debugger {
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 999px;
            box-shadow: 0 0 20px 5px var(--cor);
            color: white;
            font-size: 30px;
            width: 50px;
            height: 50px;
            position: absolute;
            transition: all 1s;
            right: 10px;
        }

        #showHide_sys {
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 999px;
            box-shadow: 0 0 20px 5px var(--cor);
            color: white;
            font-size: 30px;
            width: 50px;
            height: 50px;
            position: absolute;
            transition: all 1s;
            left: 10px;
            bottom: 0;
        }

        #about {
            width: 300px;
            height: 90%;
            position: absolute;
            left: -400px;
            top: 10px;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            transition: all 1s;
            border-radius: 10px;
        }

        #debugger {
            width: 300px;
            height: 90%;
            position: absolute;
            right: -400px;
            top: 10px;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            transition: all 1s;
            border-radius: 10px;
        }

        #sysDiv {
            width: 300px;
            height: 90%;
            position: absolute;
            left: -400px;
            bottom: 10px;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            transition: all 1s;
            border-radius: 10px;
        }

        h3,
        h4,
        h5,
        h6 {
            display: inline;
        }

        fieldset {
            border-color: cyan;
            padding: 2px;
        }

        #debuggerFieldNeuro {
            max-height: 50em;
            overflow: auto;
        }

        #memoryChart {
            width: 280px;
            height: 300px;
            background-color: transparent;
        }

        .secure {
            filter: blur(3px);
        }

        .secureBtn {
            background-color: transparent;
            border-radius: 999px;
            padding: 2px;
            border: 1px solid var(--cor);
            margin: 5px;
        }

        button:hover {
            cursor: pointer;
        }

        .panel {
            display: inline-block;
            margin: 5px;
            width: 25px;
            height: 25px;
            border-radius: 999px;
            background-color: white;
            border: 1px solid black;
        }

        #log {
            height: 200px;
            color: white;
            padding: 2px;
            font-size: large;
            overflow: auto;
            font-weight: bold;
            display: flex;
            flex-direction: column;
        }
    </style>
</head>

<body>
    <div class="php" id="phpdata"></div>
    <div class="php" id="phpsearch"></div>
    <div class="php" id="phpconnectfardos"></div>
    <video id="video" width="320" height="240" preload autoplay loop muted></video>
    <canvas id="canvas" width="320" height="240"></canvas>
    <div id="rosto">
        <span id="R_E" class="rosto">︵</span>
        <span id="boca" class="rosto">︶</span>
        <span id="L_E" class="rosto">︵</span>
    </div>
    <div id="status">
        <div id="newsDiv">
            <span id="news"></span>
            <span id="newsIcon">📰</span>
        </div>
        <span id="batt"></span>
        <span id="temp"></span>
        <span id="wifi"></span>
        <span id="hora"></span>
        <span id="data"></span>
    </div>
    <button id="showHide_testes" onclick="btn_showHide_testes()">?</button>
    <div id="about">
        <ul>
            <h2>Frases para testar:</h2>
            <li>"Quais são as notícias de hoje Fardo?"</li>
            <li>"Pesquise Fardo"</li>
            <li>"Renomear Fardo"</li>
            <li>"Que horas são Fardo?"</li>
            <li>"Muda sua cor Fardo"</li>
            <li>"Criar alarme Fardo"</li>
            <li>"Fardo calcule 40 + 2 x 42"</li>
            <li>"Muda de voz Fardo"</li>
            <li>"Durma Fardo"</li>
            <li>"Relatório de erros Fardo"</li>
            <li>"Obrigado Fardo"</li>
            <li>"Parabêns para você!"</li>
            <li>"Quantos anos você tem Fardo?"</li>
            <li>"Por que seu nome é Fardo?"</li>
            <li>"Cria uma rotina Fardo"</li>
            <li>"Deleta uma rotina Fardo"</li>
            <li>"Cria um lembrete Fardo"</li>
            <li>"Deleta um lembrete Fardo"</li>
            <li>"Se apresente Fardo"</li>
            <li>"Qual é a temperatura Fardo?"</li>
            <li>"O que tem na agenda Fardo?"</li>
            <li>"Conta uma piada Fardo"</li>
            <li>"Fale mais alto Fardo"</li>
            <li>"Fale mais baixo Fardo"</li>
            <li>"Que dia é hoje Fardo?"</li>
            <li>"Qual a data de hoje Fardo?"</li>
            <li>"Em que ano estamos Fardo?"</li>
            <li>"Olá Fardo"</li>
            <li>"Tudo bem Fardo?"</li>
            <li>"Tchau Fardo"</li>
            <li>"Espera Fardo"</li>
            <li>"Bom dia Fardo"</li>
            <li>"Boa tarde Fardo"</li>
            <li>"Boa noite Fardo"</li>
            <li>"Boa madrugada Fardo"</li>
        </ul>
    </div>
    <button id="showHide_debugger" onclick="btn_showHide_debugger()">🔎︎</button>
    <div id="debugger">
        <fieldset id="debuggerFieldNeuro">
            <legend>
                <h2>Conexões Neurais:</h2>
            </legend>
        </fieldset>
        <br>
        <fieldset id="log">
            <legend>
                <h2>Frases entendidas:</h2>
            </legend>
        </fieldset>
    </div>
    <button id="showHide_sys" onclick="btn_showHide_sys()">📊</button>
    <div id="sysDiv">
        <h2>Sistema:</h2>
        <fieldset>
            <legend>
                <h3>Memória do disco:</h3>
            </legend>
            <div id="memoryChart">
                <canvas id="canvasChart"></canvas>
            </div>
            <hr>
            <h4>Total: </h4>
            <span id="total"></span>
            <br>
            <h4>Livre: </h4>
            <span id="free"></span>
            <br>
            <h4>Em uso: </h4>
            <span id="use"></span>
            <br>
            <h4>Quantidade de arquivos no Fardo: </h4>
            <span id="files"></span>
        </fieldset>
        <br>
        <fieldset>
            <legend>
                <h3>Localização:</h3>
            </legend>
            <h4>X: </h4>
            <span id="x" class="secure"></span><button class="secureBtn" onclick="reveal(this)" id="0">👁️</button>
            <br>
            <h4>Y: </h4>
            <span id="y" class="secure"></span><button class="secureBtn" onclick="reveal(this)" id="1">👁️</button>
            <br>
            <h3>IP LAN: </h3>
            <span id="ipLan"></span>
            <br>
            <h3>IP Externo: </h3>
            <span id="ipExt" class="secure"></span><button class="secureBtn" onclick="reveal(this)" id="2">👁️</button>
        </fieldset>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>
    <script src="Fardo_ToolBox.js"></script>
    <script src="jquery-3.6.0.min.js"></script>
    <script src="tracking.js-master/build/tracking-min.js"></script>
    <script src="tracking.js-master/build/data/face-min.js"></script>

    <script src="rosto.js"></script>
    <script src="variaveis.js"></script>
    <script src="fardos.js"></script>
    <script src="fardosControl.js"></script>
    <script src="vocabulario.js"></script>
    <script src="face-detection.js"></script>
    <script src="scripts.js"></script>
    <script src="novidades.js"></script>
    <script src="themes.js"></script>
    <script src="sugestoes.js"></script>
    <script src="main.js"></script>
    <script src="core.js"></script>
    <script src="intervals.js"></script>
    <script src="apresentacoes.js"></script>
</body>

</html>
<?php include(__DIR__ . "/scripts.php"); ?>