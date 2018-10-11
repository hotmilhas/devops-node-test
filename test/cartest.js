require("dotenv").config();
var assert = require('assert');
const fetch = require('node-fetch');
var expect = require('chai').expect;
var URLSearchParams = require('url-search-params');


describe('Integração com PHP', function () {

    it('Método POST', function () {

        let url = process.env.APP_HOSTNAME + ':' + process.env.APP_PORT + '/new';
        var body = new URLSearchParams();
        body.append('marca','Honda');
        body.append('modelo','HRV');
        body.append('fabricacao',2018);

        fetch(url, {
            method: 'POST',
            body: body,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then(res => res.json())
        .then((json) => { 
            expect(json).to.have.property('status').equal(200);
            expect(json).to.have.property('result').to.be.true;
        })
        .catch(err => {
            assert.fail("Retorno 200", "Falha requisição", err);
        });
    });

    it('Método GET ', function () {
        let url = process.env.APP_HOSTNAME + ':' + process.env.APP_PORT + '/all';
        fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then((json) => { 
            expect(json).to.have.property('status').equal(200);
            expect(json).to.have.property('result').to.be.an('array');
        })
        .catch(err => {
            assert.fail("Retorno 200", "Falha requisição", err);
        });
    });
});