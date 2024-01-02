import express from 'express'
import path from 'path'
import router from './web.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { configDotenv } from 'dotenv';

configDotenv();
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./public")));

app.set("views", "templates");
app.set("view engine", "ejs");

app.use(router);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})


