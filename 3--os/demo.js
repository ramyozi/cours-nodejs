const os = require('os');
const lr = require('../2/init-read-line');

const map = new Map([
    ['architecture', os.arch()],
    ['os', os.type()],
    ['cpus', os.cpus().length],
    ['tempdir', os.tmpdir()],
    ['memoiretotale', `${os.totalmem() / 1024 / 1024 / 1024} Go`],
    ['memoirelibre', `${os.freemem() / 1024 / 1024 / 1024} Go`]
]);


function askWhatInfoHeWantThenDisplayIt( firstCall = true ) {

    const promptMessage = firstCall 
        ? 'Quelle information souhaitez-vous ? (\nLes choix : \n - tout.\n - architecture.\n - os.\n - cpus.\n - tempdir.\n - memoiretotale.\n - memoirelibre.\n - quit.\n - clear.\n - help.\n Mon choix: '
        : 'Quelle information souhaitez-vous ? \n Mon Choix: ';

    lr.question(promptMessage, (answer) => {
        let info = {};

        switch (answer.toLowerCase()) {
            case 'tout':
                info = {
                    architecture: os.arch(),
                    os: os.type(),
                    cpus: os.cpus().length,
                    tempdir: os.tmpdir(),
                    memoiretotale: `${os.totalmem() / 1024 / 1024 / 1024} Go`,
                    memoirelibre: `${os.freemem() / 1024 / 1024 / 1024} Go`
                };
                console.log(info);
                break;
            case 'quit':
                console.log('Fermeture...');
                lr.close();
                return;
            case 'clear':
                console.clear();
                break;
            case 'help':
                console.log('Commandes disponibles : tout, architecture, os, cpus, tempdir, memoiretotale, memoirelibre, quit, clear, help');
                break;
            default:
                if (map.has(answer.toLowerCase())) {
                    info[answer.toLowerCase()] = map.get(answer.toLowerCase());
                    console.log(info);
                } else {
                    console.log('Cette information n\'est pas disponible. Tapez "help" pour voir les options.');
                }
                break;
        }

        if (answer.toLowerCase() !== 'quit') {
            askWhatInfoHeWantThenDisplayIt(false);  
        }
    });
}

askWhatInfoHeWantThenDisplayIt(true);