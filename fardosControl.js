const fardos = {
    home: new Fardos(true, {}),
    learn: new Fardos(false, {}),
    security: new Fardos(false, {
        offline: async () => {
            //code
            await falar("Segurança comprometida, falha na rede");
        },
        online: async () => {
            //code
            await falar("Rede restaurada, reestabelecendo protocolos de segurança");
        }
    }),
    business: new Fardos(false, {}),
    dba: new Fardos(false, {}),
    parents: new Fardos(false, {}),
    toolbox: new Fardos(true, {}),
    ide: new Fardos(false, {}),
    iot: new Fardos(false, {}),
    science: new Fardos(false, {}),
};