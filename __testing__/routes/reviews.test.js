const request = require('supertest');
const server = 'http://localhost:3000';


//remove sth from the working code so the test fails

describe('Reviews route integration', () => {
    describe('/reviews', () => {
        describe('GET', () => {
            it('Responds with status 200 and the type of res.locals.reviews',() => {
                return request(server)
                    .get('/')
                    .expect('Content-Type', /application\/json/)
                    .expect(200);

            });
        });
    });

    // describe('/reviews/:id', () => {
    //     describe('GET', () => {
    //         it('Responds with status 200 and the review of specified user',() => {
    //             return request(server)
    //                 .get('/:id')
    //                 .expect('Content-Type', /xxx/)
    //                 .expect(200);

    //         });
    //     });
    

    //     describe('PATCH', () => {
    //         it('Responds with status 200 and w the type of res.locals.reviews',() => {
    //             return request(server)
    //                 .patch('/reviews/:id')
    //                 .send(newMarket)
    //                 .then(res => console.log(res))
    //                 .expect('Content-Type', /application\/json/)
    //                 .expect(200);

    //         });
    //     });


    //     describe('DELETE', () => {
    //         it('Responds with status 200 and the type of res.locals.reviews',() => {
    //             return request(server)
    //                 .get('/')
    //                 .expect('Content-Type', /xxx/)
    //                 .expect(200);

    //         });
    //     });

    // });


});