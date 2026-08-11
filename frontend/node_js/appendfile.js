import fs from 'fs';
fs.appendFile('message.txt','\nThis is another message.','utf8',(err) => {
        if (err) throw err;
        console.log('Content added successfully!');
    }
);