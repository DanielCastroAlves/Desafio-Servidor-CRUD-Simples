module.exports = function () {
    const clientesJson = require("../data/clientes.json")

    const controller = {
        showList: function (req, res) {
            res.status(200).json(clientesJson);
        },
        add: function (req, res) {
            console.log("recebi requisição....")
            let { id, nome, endereco, email, altura, casado } = req.body;
            clientesJson.clientes.data[id] = { id, nome, endereco, email, altura, casado };
            res.status(200).json(clientesJson);
        },
        update: function (req, res) {
            console.log("recebi requisição update....", req.body)
            let { id, nome, endereco, email, altura, casado } = req.body;
            clientesJson.clientes.data[id] = { id, nome, endereco, email, altura, casado };
            res.status(200).json(clientesJson);
        },
        remove: function (req, res) {
            console.log("recebi requisição remove....", req.body)
            let id = req.body.id;
            delete clientesJson.clientes.data[id];
            res.status(200).json(clientesJson);
        },
    }
    return controller;
}