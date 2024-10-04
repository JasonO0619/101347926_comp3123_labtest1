// 2. Create Log files
// o create a Logs directory, if it does not exist
// o change the current process to the new Logs directory
// o create 10 log files and write some text into the file
// o output the files names to console

const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

const createFiles = () => {
    if(!fs.existsSync(logsDirectory)){
        fs.mkdirSync(logsDirectory);
    }
    process.chdir(logsDirectory);

    for (let i = 0; i <= 9; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}.`); 
       console.log(fileName)
    }
}

createFiles();
