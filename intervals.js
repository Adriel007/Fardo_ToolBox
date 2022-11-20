setInterval(() => {
    //debuggerPanel("interval_main");
    data = new Date();
    let min = data.getMinutes();
    let hora = data.getHours();
    let dia = data.getDate();
    let mes = (data.getMonth() + 1);
    let ano = data.getFullYear();
    if (min < 10) min = "0" + min;
    if (hora < 10) hora = "0" + hora;
    if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;
    if (tempInCelsius == undefined) tempInCelsius = "Erro na medição";
    stats.hora.textContent = hora + ":" + min;
    stats.data.textContent = dia + "/" + mes + "/" + ano;
    stats.temp.textContent = tempInCelsius + "°C";
    if (tempInCelsius < 10) stats.temp.style.color = "#0096FF";
    else if ((tempInCelsius >= 10 && tempInCelsius < 20)) stats.temp.style.color = "#89CFF0";
    else if ((tempInCelsius >= 20 && tempInCelsius < 25)) stats.temp.style.color = "white";
    else if ((tempInCelsius >= 25 && tempInCelsius < 30)) stats.temp.style.color = "gold";
    else if (tempInCelsius >= 30) stats.temp.style.color = "red";
  }, 1);
  
  setInterval(async () => {
    debuggerPanel("interval_detectUser");
    if (people == true && introHasEnd == true) user_detected();
    if (data.getMinutes() == 0 && switcher_hour == true) {
      switcher_hour = false;
      setTimeout(() => switcher_hour = true, 61000);
      memoria.push("São " + time(data.getHours(), data.getMinutes()));
    }
  }, 100);
  
  setInterval(async () => {
    debuggerPanel("intervals_connectFardos");
    $("#phpconnectfardos").load("connectFardos.php");
    if (message.json != null) {
      eval(`let x = async () => {${message.json}}; x();`);
      message.id = null;
      message.from = null;
      message.to = null;
      message.json = null;
    };
  }, 100);
  
  setInterval(() => {
    debuggerPanel("interval_detectColorido");
    if (sinonimos_colorido.some(aux => color.includes(aux)) && active == true) colored();
  }, 999);
  
  setInterval(() => {
    debuggerPanel("interval_php_data");
    $("#phpdata").load("data.php");
    if (news.length > 99) stats.news.news.textContent = "99+";
    else stats.news.news.textContent = news.length;
    if (news.length > 0) stats.news.news.style.display = "block";
    else stats.news.news.style.display = "none";
    if (introHasEnd) {
      memoryChart.data.datasets[0].data[0] = sys.memoryTotal;
      memoryChart.data.datasets[0].data[1] = sys.memoryFree;
      memoryChart.data.datasets[0].data[2] = sys.memoryUse;
      memoryChart.data.datasets[0].data[3] = sys.memoryFardoUse;
      memoryChart.update();
      memoryUpdate();
    }
  }, 1000);

  setInterval(() => {
    if (occupied == false && active == true) speakAll();
  }, 5000);
  
  setInterval(() => {
    debuggerPanel("interval_piscar");
    if (active == true) rosto.piscar();
  }, 10000);
  
  setInterval(getUserPosition, 60000);
  