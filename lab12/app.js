const fs = require('fs');
const { Transform } = require('stream');
const { EventEmitter } = require('events');

fs.writeFile('source.txt', generateRandomContent(), (err) => {
    if (err) throw err;
    console.log('Файл "source.txt" було успішно створено.');

    const readStream = fs.createReadStream('source.txt', { encoding: 'utf8' });
    const writeStream = fs.createWriteStream('destination.txt');
    const eventEmitter = new EventEmitter();

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().toUpperCase());
            callback();
        }
    });

    readStream.pipe(transformStream).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Дані успішно перенесені та змінені у файлі "destination.txt".');
        eventEmitter.emit('fileProcessed');
    });

    eventEmitter.on('fileProcessed', () => {
        console.log('Обробка файлів завершена.');
    });
});

function generateRandomContent() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let content = '';
    for (let i = 0; i < 1000; i++) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        content += randomChar;
    }
    return content;
}