const lambdaTester = require('lambda-tester');
const { expect } = require('chai');
const { findOne, find, create, update, deleteOne } = require('../src/handler');
const myAPI = require('../src/service/people');
const sinon = require('sinon');

describe('FindOne [GET]', () => {

    it('success', () => {
        try {
            return lambdaTester(findOne)
                .event({ pathParameters: { id: "91b71f40-df95-11ea-be5d-cb32e3d1bfb6" } })
                .expectResult((result) => {
                    expect(result.statusCode).to.equal(200);
                    const body = JSON.parse(result.body);
                    expect(body.code).to.equal(0);
                });
        } catch (err) {
            console.log(err);
        }
    });

    it('error', () => {
        try {
            return lambdaTester(findOne)
                .event({ pathParameters: { id: "" } })
                .expectResult((result) => {
                    expect(result.statusCode).to.equal(400);
                    const body = JSON.parse(result.body);
                    expect(body.code).to.equal("ValidationException");
                });
        } catch (err) {
            console.log(err);
        }
    });
});


describe('Find [GET]', () => {
    it('success', () => {

        return lambdaTester(find)
            .event({})
            .expectResult((result) => {
                expect(result.statusCode).to.equal(200);
                const body = JSON.parse(result.body);
                expect(body.code).to.equal(0);
            });
    });

    it('error', () => {


        return lambdaTester(find)
            .event({})
            .expectResult((result) => {
                expect(result.statusCode).to.equal(200);
                const body = JSON.parse(result.body);
                expect(body.code).to.equal(0);
            });
    });
});


describe('Create [POST]', () => {
    it('success', () => {

        return lambdaTester(create)
            .event({
                body: ({
                    "nombre": "maria",
                    "anio_nacimiento": "1990",
                    "color_ojos": "azul",
                    "genero": "comedia",
                    "color_cabello": "rojo",
                    "altura": "1.870",
                    "masa": "98",
                    "color_piel": "mestizo",
                    "ciudad_natal": "lima",
                    "peliculas": ["a", "b"],
                    "especies": ["a", "b"],
                    "naves_espaciales": ["a", "b"],
                    "vehiculos": ["a", "b"],
                    "url": "http://google.com"
                })
            })
            .expectResult((result) => {
                expect(result.statusCode).to.equal(200);
                const body = JSON.parse(result.body);
                expect(body.code).to.equal(0);
            });
    });


});


describe('Update [PUT]', () => {
    it('success', () => {

        return lambdaTester(update)
            .event({
                pathParameters: { id: "91b71f40-df95-11ea-be5d-cb32e3d1bfb6" }, body: JSON.stringify({
                    "nombre": "noel",
                    "anio_nacimiento": "1990",
                    "color_ojos": "azul",
                    "genero": "comedia",
                    "color_cabello": "rojo",
                    "altura": "1.870",
                    "masa": "98",
                    "color_piel": "mestizo",
                    "ciudad_natal": "lima",
                    "peliculas": ["a", "b"],
                    "especies": ["a", "b"],
                    "naves_espaciales": ["a", "b"],
                    "vehiculos": ["a", "b"],
                    "url": "http://google.com"
                })
            })
            .expectResult((result) => {
                expect(result.statusCode).to.equal(200);
                const body = JSON.parse(result.body);
                expect(body.code).to.equal(0);
            });
    });

});

