const fetch = require('node-fetch');
require("dotenv").config();

module.exports = function (app, db) {
    let url = process.env.PHP_HOSTNAME + ':' + process.env.PHP_PORT

    app.post('/new', (req, res) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => res.send(json))
            .catch(err => {
                res.send('Erro desconhecido, tente novamente' + err);
            });
    }
    );

    app.get('/all', (req, res) => {
        fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => res.send(json))
            .catch(err => {
                res.send('Erro desconhecido, tente novamente' + err);
            });
    });
};

