const lambdaTester = require('lambda-tester');
const { expect } = require('chai');
const { findOne, find, create, update, deleteOne } = require('../src/handler');
//const * as booksMock from './books.mock';
const myAPI = require('../src/service/people');
const sinon = require('sinon');

describe('FindOne [GET]', () => {

    it('success', () => {
        try {

            const s = sinon.mock(myAPI);

            s.expects('findOnePeopleById')
                .atLeast(1)
                .atMost(3)
                .resolves({
                    "_id": "5dff58da85eb210f0aac43af",
                    "nombre": "深入浅出Node.js"
                });

            return lambdaTester(findOne)
                .event({ pathParameters: { id: "5dff58da85eb210f0aac43af" } })
                .expectResult((result) => {
                    expect(result.statusCode).to.equal(200);
                    const body = JSON.parse(result.body);
                    expect(body.code).to.equal(0);
                    s.verify();
                    s.restore();
                });
        } catch (err) {
            console.log(err);
        }
    });

    it('error', () => {
        try {
            const s = sinon.mock(myAPI);

            s.expects('findOnePeopleById')
                .rejects(new Error());

            return lambdaTester(findOne)
                .event({ pathParameters: { id: 25768396 } })
                .expectResult((result) => {
                    expect(result.statusCode).to.equal(200);
                    const body = JSON.parse(result.body);
                    expect(body.code).to.equal(1000);
                    s.restore();
                });
        } catch (err) {
            console.log(err);
        }
    });
});


describe('Find [GET]', () => {
    it('success', () => {
        const s = sinon
            .mock(myAPI);

        s.expects('findPeoples')
            .resolves([
                {
                    "nombre": "noel",
                    "color_cabello": "rojo",
                    "naves_espaciales": [
                        "a",
                        "b"
                    ],
                    "masa": "98",
                    "vehiculos": [
                        "a",
                        "b"
                    ],
                    "altura": "1.870",
                    "url": "http://google.com",
                    "ciudad_natal": "lima",
                    "peliculas": [
                        "a",
                        "b"
                    ],
                    "editado": "2020-08-16T03:22:45.118Z",
                    "color_piel": "mestizo",
                    "especies": [
                        "a",
                        "b"
                    ],
                    "creado": "2020-08-16T03:22:45.118Z",
                    "id": "c070c000-df6f-11ea-b648-d5157e5cf8bf",
                    "color_ojos": "azul",
                    "anio_nacimiento": "1990",
                    "genero": "comedia"
                }
            ]);

        return lambdaTester(find)
            .event({})
            .expectResult((result) => {
                expect(result.statusCode).to.equal(200);
                const body = JSON.parse(result.body);
                expect(body.code).to.equal(0);
                s.restore();
            });
    });

    it('error', () => {
        const s = sinon
            .mock(myAPI);

        s.expects('findPeoples').rejects(new Error('test find error'));

        return lambdaTester(find)
            .event({})
            .expectResult((result) => {
                expect(result.statusCode).to.equal(200);
                const body = JSON.parse(result.body);
                expect(body.code).to.equal(1000);
                s.restore();
            });
    });
});

describe('Create [POST]', () => {
    var myAPI = { method: function () { } };
    it('success', () => {
        const s = sinon
            .mock(myAPI);

        s.expects('createPeople').resolves({
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
        });

        return lambdaTester(create)
            .event({
                body: JSON.stringify({
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
                s.restore();
            });
    });

    it('error', () => {
        const s = sinon
            .mock(myAPI);

        s.expects('create').rejects(new Error());

        return lambdaTester(create)
            .event({
                body: JSON.stringify({
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
                expect(body.code).to.equal(1000);
                s.restore();
            });
    });
});

describe('Update [PUT]', () => {
    var myAPI = { method: function () { } };
    it('success', () => {
        const s = sinon
            .mock(myAPI);

        s.expects('updatePeoples').resolves({
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
        });

        return lambdaTester(update)
            .event({
                pathParameters: { id: 30247892 }, body: JSON.stringify({
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
                s.restore();
            });
    });

    it('error', () => {
        const s = sinon
            .mock(myAPI);

        s.expects('updatePeoples').rejects(new Error());

        return lambdaTester(update)
            .event({
                pathParameters: { id: '30247892_' }, body: JSON.stringify({
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
                expect(body.code).to.equal(1000);
                s.restore();
            });
    });
});

describe('DeleteOne [Delete]', () => {
    var myAPI = { method: function () { } };
    it('success', () => {
        const s = sinon
            .mock(myAPI);

        s.expects('deleteOnePeopleById').resolves({ id: 30247892 });

        return lambdaTester(deleteOne)
            .event({ pathParameters: { id: 30247892 } })
            .expectResult((result) => {
                expect(result.statusCode).to.equal(200);
                const body = JSON.parse(result.body);
                expect(body.code).to.equal(0);
                s.restore();
            });
    });


    it('error', () => {
        const s = sinon
            .mock(myAPI);

        s.expects('deleteOnePeopleById').rejects(new Error());

        return lambdaTester(deleteOne)
            .event({ pathParameters: { id: '30247892_' } })
            .expectResult((result) => {
                expect(result.statusCode).to.equal(200);
                const body = JSON.parse(result.body);
                expect(body.code).to.equal(1000);
                s.restore();
            });
    });
});
