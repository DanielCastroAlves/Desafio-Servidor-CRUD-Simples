const config = require("config")
const express = require("express")
const bodyParser = require("body-parser")

console.log('abrindo super meu servidor');

let port = config.get("server.port");
/* console.log("porta: ", port); */

const app = express();

app.listen(port, () => {
    console.log(`servidor rodadando: ${port}`)
});

