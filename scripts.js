debuggerGen();
window.addEventListener("load", async () => {
  getNews();
  themes();
  await FardoTools.fardoIntro();
  afterIntro();
}, false);

window.addEventListener('error', async e => {
  debuggerPanel("event_error");
  errorAlert();
  const { message, filename, lineno, colno, error } = e;
  if (!(relatorio_de_erros.includes(error))) {
    relatorio_de_erros.push("Mensagem: " + message + "; Fonte: " + filename + "; linha: " + lineno + "; coluna: " + colno + "; erro: " + error);
    memoria.push("Aplique as dêvidas correções, chame a função 'reparar' pelo console para verificar as possiveis soluções. Caso o problema persista, limpe os dados de navegação");
    if (error_first == true) {
      errorCrud = message + "@" + filename + "@" + lineno + "@" + colno + "@" + error;
      error_first = false;
    }
  }
  memoria.push("Erro detectado");
});
window.addEventListener('unhandledrejection', async e => {
  debuggerPanel("event_unhandledrejection");
  errorAlert();
  if (!(relatorio_de_erros.includes(e.reason))) {
    relatorio_de_erros.push(`Erro de promisse: ${e.reason}`);
  }
  memoria.push("Erro detectado");
});
window.addEventListener('online', async () => {
  debuggerPanel("event_online");
  stats.wifi.textContent = "▼";
  memoria.push("A internet voltou");
  fardosControl("online");
});
window.addEventListener('offline', async () => {
  debuggerPanel("event_offline");
  stats.wifi.textContent = "▽";
  memoria.push('A internet caiu');
  fardosControl("offline");
});
window.addEventListener("load", () => {
  recognition.grammars = new window.SpeechGrammarList();
  recognition.continuous = false;
  recognition.lang = 'pt-BR';
  recognition.interimResults = true;
  recognition.maxAlternatives = 50;
  recognition.start();
  recognition.onend = () => recognition.start();
  recognition.onresult = (event) => {
    let string = [];
    for (let c = 0; c < event.results.length; c++) {
      if (synth.speaking == false) {
        string.push((event.results[c][0].transcript).toLowerCase());
      }
    }
    string = string.toString();
    string = string.replace(/,/g, "");
    if (string != "" && saveEnergy == false && synth.speaking == false) main(string);
  };

});

async function fardosControl(func) {
  debuggerPanel("fardosControl");
  let fardo = Object.entries(fardos)
  for (let c in fardo) {
    if (fardo[c][1].status) {
      let functions = Object.entries(fardo[c][1].functions);
      for (let i in functions) {
        if (functions[i][0] == func) {
          await functions[i][1]();
          break;
        }
      }
    }
  }
}

async function saveEnergyMode() {
  debuggerPanel("saveEnergyMode");
  saveEnergy = true;
  active = false;
  rosto.fechar_olho(2);
  rosto.setCor("transparent");
  memoria.push("Modo de economia de energia ativado");
}

async function normalMode() {
  debuggerPanel("normalMode");
  saveEnergy = false;
  active = true;
  rosto.abrir_olho(2);
  rosto.setCor(color);
  memoria.push("Modo de economia de energia desativado");
}

function errorAlert() {
  debuggerPanel("errorAlert");
  document.body.style.backgroundColor = "red";
  setTimeout(() => document.body.style.backgroundColor = rosto.theme.themeColor.bg, 501);
}

function getUserPosition() {
  debuggerPanel("getUserPosition");
  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    sys.location.lat = pos.coords.latitude;
    sys.location.lng = pos.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=95b11822eb429c84c1143a19251b1881`;
    fetchApi(url);
  });
}

async function fetchApi(url) {
  debuggerPanel("fetchApi");
  await fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      tempInCelsius = ((5 / 9) * (data.main.temp - 32)).toFixed(1);
    });
}

function time(hour, minute) {
  debuggerPanel("time");
  let periodo = "";
  let string = "";
  if (hour == 12) hour = "meio-dia";
  else if (hour == 0) hour = "meia-noite";
  else if (hour < 12) periodo = "da manhã";
  else if (hour > 12 && hour < 18) periodo = "da tarde";
  else if (hour > 12 && hour >= 18) periodo = "da noite";
  else periodo = periodo;

  if (minute == 0) minute = "em ponto";
  else if (minute == 30) minute = "e meia";
  else minute = "e " + minute;

  if (hour > 12) hour = hour - 12;
  if (minute != "em ponto") string = `${hour} ${minute} ${periodo}`;
  if (minute == "em ponto") string = `${hour} ${periodo} ${minute}`;
  return string;
}

getUserPosition();

function debuggerGen() {
  //debuggerPanel("debuggerGen");
  let intervals = [];
  let functions = [];
  let events = [];
  let facials = [];
  let buttons = [];
  panel = panel.sort((a, b) => a.localeCompare(b));
  for (let c of panel) {
    if (c.includes("interval")) intervals.push(c);
    else if (c.includes("event")) events.push(c);
    else if (c.includes("rosto")) facials.push(c);
    else if (c.includes("btn")) buttons.push(c)
    else functions.push(c);
  }
  panel = [];
  intervals.forEach((value) => panel.push(value));
  functions.forEach((value) => panel.push(value));
  events.forEach((value) => panel.push(value));
  facials.forEach((value) => panel.push(value));
  buttons.forEach((value) => panel.push(value));
  for (let c of panel) FardoTools.html("div", ["class", "title"], ["panel", c], null, neuroDebugger);
}

function log(text) {
  debuggerPanel("log");
  let span = document.createElement("span");
  span.textContent = text;
  span.style.borderBottom = "solid 1px cyan";
  span.style.marginBottom = "5px"
  logDiv.appendChild(span);
  logDiv.scrollTop = logDiv.scrollHeight;
}

function search(data) {
  debuggerPanel("search");
  document.cookie = "query=" + data;
  $("#phpsearch").load("search.php");
}

function getNews() {
  debuggerPanel("getNews");
  $("#phpsearch").load("news.php");
}

function wordToNumber(string) {
  debuggerPanel("wordToNumber");
  string = string.replace(/zero/g, "0");
  string = string.replace(/um/g, "1");
  string = string.replace(/dois/g, "2");
  string = string.replace(/três/g, "3");
  return string;
}

function debuggerPanel(index) {
  //debuggerPanel("debuggerPanel");
  if (debuggerDiv.style.right != "-400px") {
    panelLamps[panel.indexOf("interval_main")].style.backgroundColor = "cyan";
    panelLamps[panel.indexOf("debuggerPanel")].style.backgroundColor = "lime";
    index = panel.indexOf(index);
    let div = panelLamps[index];
    if (div.title.includes("interval")) div.style.backgroundColor = "cyan";
    else if (div.title.includes("event")) div.style.backgroundColor = "orange";
    else if (div.title.includes("rosto")) div.style.backgroundColor = "red";
    else if (div.title.includes("btn")) div.style.backgroundColor = "yellow";
    else div.style.backgroundColor = "lime";
    setTimeout(() => div.style.backgroundColor = "white", 300);
  }
}

function sysCreate() {
  debuggerPanel("sysCreate");
  sysSpan.files.textContent = sys.Fardofiles;
  sysSpan.x.textContent = sys.location.lat;
  sysSpan.y.textContent = sys.location.lng;
  sysSpan.ipLan.textContent = sys.ipLan;
  sysSpan.ipExt.textContent = sys.ipExt;
}

function formatBytes(bytes, decimals = 2) {
  debuggerPanel("formatBytes");
  let byteBase = 1024;
  let dm = decimals < 0 ? 0 : decimals;
  let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let i = Math.floor(Math.log(bytes) / Math.log(byteBase));

  if (bytes == 0) return '0 Bytes';
  return `${parseFloat((bytes / Math.pow(byteBase, i)).toFixed(dm))} ${sizes[i]}`;
}

function memoryUpdate() {
  debuggerPanel("memoryUpdate");
  FardoTools.css(sysSpan.total, "color: white; font-weight: bold;");
  FardoTools.css(sysSpan.free, "color: cyan; font-weight: bold;");
  FardoTools.css(sysSpan.use, "color: red; font-weight: bold;");
  sysSpan.total.textContent = formatBytes(sys.memoryTotal);
  sysSpan.free.textContent = formatBytes(sys.memoryFree);
  sysSpan.use.textContent = formatBytes(sys.memoryUse);
}

function builderChart() {
  debuggerPanel("builderChart");
  let dados = {
    datasets: [{
      data: [sys.memoryTotal, sys.memoryFree, sys.memoryUse],
      backgroundColor: ['black', 'cyan', 'red']
    }],
    labels: ["Total", 'Livre', 'Em uso'],
  };
  let opcoes = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 12,
        fontStyle: "bold"
      }
    },
    tooltips: { enabled: false },
    hover: { mode: null },
  };
  memoryChart = new Chart(canvasChart, {
    type: 'doughnut',
    data: dados,
    options: opcoes
  });
}

function falar(frase) {
  debuggerPanel("falar");
  if (active == true) {
    occupied = true;
    rosto.abrir_boca();
    fala.volume = volume;
    return new Promise((resolve) => {
      fala.text = frase;
      synth.speak(fala);
      fala.onend = () => {
        rosto.fechar_boca();
        occupied = false;
        resolve();
      };
    });
  }
}
async function afterIntro() {
  debuggerPanel("afterIntro");
  sysCreate();
  builderChart();
  memoryUpdate();
  theme.normal.themeColor.setCor = color;
  showHide_testes.style.left = "10px";
  showHide_debugger.style.right = "10px";
  sysBtn.style.left = "10px";
  sysBtn.click();
  showHide_debugger.click();
  showHide_testes.click();
  stats.batt.textContent = battery.level;
  batteryUpdate();
  battery.onlevelchange = () => {
    if ((battery.level * 100) <= 5 && saveEnergy == false) {
      saveEnergyMode();
    } else if ((battery.left * 100) > 5 && saveEnergy == true) {
      normalMode();
    }
    batteryUpdate();
  };
  fala.voice = synth.getVoices()[voz];
  if (document.querySelectorAll("b").length > 0) {
    memoria.push("Erro php detectado");
    errorAlert();
    let phpErrors = "";
    for (let c = 0; c < document.querySelectorAll("b").length; c++) phpErrors += document.querySelectorAll("b")[c].textContent + "; "
    relatorio_de_erros.push("Erros de php: " + phpErrors);
  }
  if (window.navigator.onLine) stats.wifi.textContent = "▼";
  if (!window.navigator.onLine) stats.wifi.textContent = "▽";
  rosto.abrir_olho();
  if (news.length == 0) getNews();
  memoria.push("Recursos carregados com sucesso");
  introHasEnd = true;
  for (let i = 0; i < document.querySelectorAll("script").length; i++) {
    if (document.querySelectorAll("script")[i].hasAttribute("src") == false) {
      document.querySelectorAll("script")[i].remove();
      i = 0;
    }
  }
  if (bd_values.data[bd_values.data.length - 1] == "undefined") {
    bd_values.data.pop();
    bd_values.value.pop();
  }
  if (bd_values.data[0] == "") {
    bd_values.data.shift();
    bd_values.value.shift();
  }
}

function blankSearch() {
  $("#phpsearch").ready(() => {
    php.searchDiv.innerHTML = "";
  });
}

function reveal(dom) {
  debuggerPanel("reveal");
  let index = dom.id;
  if (dom.textContent == "🔒") {
    dom.textContent = "👁️";
    secureItems[index].style.filter = "blur(3px)";
  } else {
    dom.textContent = "🔒"
    secureItems[index].style.filter = "none";
  }
}

function randomWord(array) {
  return array[random(0, array.length - 1)];
}

function reparar() {
  debuggerPanel("reparar");
  Crud("error", errorCrud);
  FardoTools.html("form", ["method"], ["post"], "", document.body);
  let form = document.getElementsByTagName("form")[0];
  FardoTools.html("input", ["type", "value", "name"], ["text", "error", "crud"], "", form);
  FardoTools.html("input", ["type", "value", "name"], ["text", errorCrud, "value0"], "", form);
  form.style.display = "none";
  form.submit();
}
function fix(text) {
  debuggerPanel("fix");
  if (text.includes(" pardo ")) text = text.replace("pardo", "fardo");
  else if (text.includes(" bar do ")) text = text.replace("bar do", "fardo");
  else if (text.includes(" bar du ")) text = text.replace("bar du", "fardo");
  else if (text.includes(" fábio ")) text = text.replace("fábio", "fardo");
  else if (text.includes(" claro ")) text = text.replace("claro", "fardo");
  else if (text.includes(" faro ")) text = text.replace("faro", "fardo");
  else if (text.includes(" ardo ")) text = text.replace("ardo", "fardo");
  else if (text.includes(" flávio ")) text = text.replace("flávio", "fardo");
  else if (text.includes(" ford ")) text = text.replace("ford", "fardo");
  else if (text.includes(" pardo ")) text = text.replace("pardo", "fardo");
  return text;
}
function random(min, max) {
  debuggerPanel("random");
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function user_detected() {
  debuggerPanel("user_detected");
  if (data_atual.dia != data.getDate()) {
    data_atual = {
      ano: data.getFullYear(),
      mes: data.getMonth() + 1,
      dia: data.getDate()
    };
    switcher_data = true;
    switcher_temperatura = true;
    switcher_lembretes = true;
    switcher_rotinas = true;
    memoriaSpeak = true;
    getNews();
    themes();
  }
  if (switcher_temperatura == true) temperaturas();
  if (switcher_data == true) datas();
  if (switcher_lembretes == true) lembretes();
  if (switcher_rotinas == true) rotinas();
  if (memoria.length > 0 && memoriaSpeak == true) speakAll();
}
function containsNumber(str) {
  debuggerPanel("containsNumber");
  return /\d/.test(str);
}
function Crud(crud, value_0, value_1, value_2) {
  debuggerPanel("crud");
  $.ajax({
    type: "POST",
    url: "index.php",
    data: "crud=" + crud + "&value0=" + value_0 + "&value1=" + value_1 + "&value2=" + value_2
  });
}

function colored() {
  debuggerPanel("colored");
  let cor = "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
  rosto.setCor(cor);
}

function batteryUpdate() {
  if ((battery.level * 100) >= 50) stats.batt.style.color = "lime";
  if ((battery.level * 100) >= 10 && (battery.level * 100) < 50) stats.batt.style.color = "yellow";
  if ((battery.level * 100) < 10) stats.batt.style.color = "red";
  stats.batt.textContent = (battery.level * 100).toFixed(0) + "%";
}

function btn_showHide_testes() {
  debuggerPanel("btn_showHide_testes");
  if (about.style.left == "-400px") {
    about.style.left = "10px";
    showHide_testes.style.left = "320px";
  } else {
    about.style.left = "-400px";
    showHide_testes.style.left = "10px";
  }
}

function btn_showHide_debugger() {
  debuggerPanel("btn_showHides_debugger");
  if (debuggerDiv.style.right == "-400px") {
    debuggerDiv.style.right = "10px";
    showHide_debugger.style.right = "320px";
  } else {
    debuggerDiv.style.right = "-400px";
    showHide_debugger.style.right = "10px";
  }
}

function btn_showHide_sys() {
  debuggerPanel("btn_showHides_sys");
  if (sysDiv.style.left == "-400px") {
    sysDiv.style.left = "10px";
    sysBtn.style.left = "320px";
  } else {
    sysDiv.style.left = "-400px";
    sysBtn.style.left = "10px";
  }
}

function find(array, string) {
  debuggerPanel("find");
  return array.some(aux => string.includes(aux));
}