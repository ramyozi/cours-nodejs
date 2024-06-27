const os = require('os');
const lr = require('../2/init-read-line');


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
            case 'architecture':
                console.log('Architecture :', os.arch());
                break;
            case 'os':
                console.log('Type de système d\'exploitation :', os.type());
                break;
            case 'cpus':
                console.log('Nombre de CPUs :', os.cpus().length);
                break;
            case 'tempdir':
                console.log('Répertoire temporaire :', os.tmpdir());
                break;
            case 'memoiretotale':
                console.log('Mémoire totale :', `${os.totalmem() / 1024 / 1024 / 1024} Go`);
                break;
            case 'memoirelibre':
                console.log('Mémoire libre :', `${os.freemem() / 1024 / 1024 / 1024} Go`);
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
                console.log('Cette information n\'est pas disponible. Tapez "help" pour voir les options.');
                break;
        }


        if (answer.toLowerCase() !== 'quit') {
            askWhatInfoHeWantThenDisplayIt(false);  
        }
    });
}

askWhatInfoHeWantThenDisplayIt(true);