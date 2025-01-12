import express from 'express';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use('/',
    express.static(
        resolve(
            __dirname,
            './dist'
        ))
);

app.listen(process.env.PORT || 3000, (err) => {
    if (err) { return console.error(err); }

    console.log("Tudo funcionando certinho");
});
