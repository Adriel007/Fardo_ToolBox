const timer = ms => new Promise(res => setTimeout(res, ms));
const data_tempo = 86400000;//1 dia
const temperatura_tempo = 43200000;//12 horas
const clear_tempo = 10000;//10 segundos
const qtd_script = 6;
const synth = window.speechSynthesis;
const alarmeSong = new Audio("alarme.wav");
const fala = new SpeechSynthesisUtterance();
const showHide_testes = document.getElementById("showHide_testes");
const showHide_debugger = document.getElementById("showHide_debugger");
const about = document.getElementById("about");
const debuggerDiv = document.getElementById("debugger");
const sysBtn = document.getElementById("showHide_sys");
const sysDiv = document.getElementById("sysDiv");
const neuroDebugger = document.getElementById("debuggerFieldNeuro");
const logDiv = document.getElementById("log");
const canvasChart = document.getElementById("canvasChart");
const panelLamps = document.getElementsByClassName("panel");
const secureItems = document.getElementsByClassName("secure");
const message = {
  id: null,
  from: null,
  to: null,
  json: null
};
const me = "home";
const fardosConnectionFunctions = {
  test: (target, data) => {
    data = data.replace(/'/g, "\\'");
    data = data.replace(/"/g, '\\"');
    Crud("fardosconnection", me, target, data);
  },

};
const php = {
  dataDiv: document.getElementById("phpdata"),
  searchDiv: document.getElementById("phpsearch"),
  connectfardosDiv: document.getElementById("phpconnectfardos")
};
const sysSpan = {
  files: document.getElementById("files"),
  x: document.getElementById("x"),
  y: document.getElementById("y"),
  ipLan: document.getElementById("ipLan"),
  ipExt: document.getElementById("ipExt"),
  total: document.getElementById("total"),
  free: document.getElementById("free"),
  use: document.getElementById("use")
};
const theme = {
  normal: {
    eyesOpened: "◉",
    eyesClosed: "︵",
    mouthOpened: "◇",
    mouthClosed: "︶",
    themeColor: {
      bg: "black",
      fg: "white",
      sleep: "black",
      setCor: color
    }
  },
  hallowen: {
    eyesOpened: "▲",//◬Δ▲
    eyesClosed: "︵",
    mouthOpened: "◆",
    mouthClosed: "︶",//෴︶
    themeColor: {
      bg: "rgb(255, 117, 24)",
      fg: "black",
      sleep: "rgb(153, 69, 17)",
      setCor: "orange"
    }
  },
  natal: {
    eyesOpened: "❅",
    eyesClosed: "︵",
    mouthOpened: "◇",
    mouthClosed: "︶",
    themeColor: {
      bg: "#000040",
      fg: "white",
      sleep: "black",
      setCor: "deepSkyBlue"
    }
  }
};
const math = {
  "divi": "/",
  "/": "/",
  "multipli": "*",
  "x": "*",
  "som": "+",
  "mais": "+",
  "+": "+",
  "subtrai": "-",
  "menos": "-",
  "-": "-",
  "raiz": "Math.sqrt",
  "pi": "Math.PI"
};
const stats = {
  wifi: document.getElementById("wifi"),
  temp: document.getElementById("temp"),
  data: document.getElementById("data"),
  hora: document.getElementById("hora"),
  batt: document.getElementById("batt"),
  news: {
    icon: document.getElementById("newsIcon"),
    news: document.getElementById("news")
  }
};
const rosto = new Rosto(
  document.getElementById("R_E"),
  document.getElementById("L_E"),
  document.getElementById("boca"),
  document.documentElement.style.getPropertyValue("--cor"),
  theme.normal
);
rosto.themeDefine();
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
window.SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const recognition = new window.SpeechRecognition();

var panel = [
  "getUserPosition",
  "fetchApi",
  "interval_main",
  "interval_detectUser",
  "interval_detectColorido",
  "interval_piscar",
  "interval_php_data",
  "debuggerGen",
  "intervals_connectFardos",
  "debuggerPanel",
  "falar",
  "afterIntro",
  "reparar",
  "fix",
  "random",
  "user_detected",
  "containsNumber",
  "crud",
  "colored",
  "btn_showHide_testes",
  "btn_showHides_debugger",
  "btn_showHides_sys",
  "find",
  "main",
  "question-mode",
  "core",
  "face-detection",
  "temperaturas",
  "lembretes",
  "rotinas",
  "datas",
  "speakAll",
  "rosto-setCor",
  "rosto-abrir_olho",
  "rosto-fechar_olho",
  "rosto-abrir_boca",
  "rosto-fechar_boca",
  "rosto-piscar",
  "database",
  "renomear",
  "voz",
  "cor",
  "criar-rotina",
  "deletar-rotina",
  "calculadora",
  "safeMode",
  "saveEnergyMode",
  "normalMode",
  "formatBytes",
  "sysCreate",
  "search",
  "memoryUpdate",
  "event_error",
  "unhandledrejection",
  "event_offline",
  "event_online",
  "getNews",
  "log",
  "alarme",
  "search",
  "apresentacao_tecnica_curta",
  "apresentacao_simples_curta",
  "apresentacao_simples_longa",
  "apresentacao_tecnica_longa",
  "apresentacao_final",
  "news",
  "reveal",
  "themes",
  "fardosControl",
  "wordToNumber",
  "builderChart",
  "errorAlert",
  "time"
];
var alarmes = {
  titulo: [],
  func: []
};
var news = [];
var memoryChart;
var sys = {
  memoryTotal: null,
  memoryFree: null,
  memoryUse: null,
  Fardofiles: null,
  ipLan: null,
  ipExt: null,
  location: { lat: null, lng: null },
};
var user = false;
var switcher_alarme = false;
var errorCrud;
var battery;
var saveEnergy = false;
var introHasEnd = false;
var occupied = false;
var people = false;
var color = "lime";
var crud = "";
var bd_values = {
  value: [],
  data: []
};
var bd_rotinas = {
  descricao: [],
  hora: [],
  dia_ou_semana: []
}
var volume = 1;
var t = [true, true, true];
var memoria = [];
var data = new Date;
var tempInCelsius;
var switcher = "";
var switcher_data = true;
var switcher_hour = true;
var switcher_lembretes = true;
var switcher_temperatura = true;
var switcher_rotinas = true;
var memoriaSpeak = true;
var switcher_links = [0, 0, 0, 0, 0, 0, 0, 0];
var links = [];
var relatorio_de_erros = [];
var error_first = true;
var switcher_bd_query_d = false;
var tmp = "";
var nome = "fardo";
var voz = 0;
var question_mode = false;
var active = true;
var data_atual = {
  ano: data.getFullYear(),
  mes: data.getMonth() + 1,
  dia: data.getDate()
};

fala.lang = "pt-BR";
fala.voice = synth.getVoices()[voz];
navigator.getBattery().then((val) => battery = val);