import fs from 'fs';

fs.writeFile('message.txt','Hello, this message is written using Node.js!','utf8',(err) => {
        if (err) throw err;
        console.log('File written successfully!');
    }
);