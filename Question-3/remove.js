// Create a script that will do the following:
// 1. Remove Log files
// o remove all the files from the Logs directory, if exists
// o output the file names to delete
// o remove the Logs directory

const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

const removeFiles = () => {
    if (fs.existsSync(logsDirectory)) { 
        const files = fs.readdirSync(logsDirectory); 
        files.forEach(file => {
            console.log(`Deleting file... ${file}`); 
            fs.unlinkSync(path.join(logsDirectory, file)); 
        });
        fs.rmdirSync(logsDirectory)
    }else{
        console.log("There's no files needed to remove.");
    }
};

removeFiles();