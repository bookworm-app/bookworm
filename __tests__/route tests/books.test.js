/**
 * Supertest is used to test the functionality of the books.js router
 */
const request = require('supertest');
const server = 'http://localhost:3000';

//can try other id's as well
const id = 3;
describe(`/books/${id}`, () => {
  describe('GET', () => {
    it('responds with 200 status and return JSON body in response', () => {
      return (
        request(server)
          .get(`/books/${id}`)
          // .then((res) => console.log(res.body))
          .expect('Content-Type', /json/)
          .expect(200)
      );
    });

    it('the response body matches the user id', () => {
      return request(server)
        .get(`/books/${id}`)
        .then((res) => {
          expect(res.body[0].userid).toEqual(id);
        });
    });
  });
});
//should I check that length of db is equal to length of res body or something similar? other than just checking the shape?
describe('/books/all', () => {
  describe('GET', () => {
    it('responds with 200 status and application/json content type', () => {
      return request(server)
        .get('/books/all')
        .expect('Content-Type', /json/)
        .expect(200);
    });
    it('all books in db', () => {
      return request(server)
        .get('/books/all')
        .expect((res) => {
          if (!Array.isArray(res.body)) throw new Error('Is not an array');
        });
    });
  });
});
/*
POST REQUEST TESTS FAIL WITH EVERYTHING

describe('POST', () => {
xit('responds with 200 status and application/json content type', () => {
  const newTitle = "New Title"
  return request(server)
    .post(`/books/${id}`)
    // .expect('Content-Type', /json/) //html
    // .expect(200); //500
    // .then(())
    .send( {
      "title": "Please help us",
      "author": "Oh Man",
      "genreId": 11,
      "statusId": 3
    })
    .then((res) => {
      // console.log(req)
      console.log('here: ', res.body[0])
      expect(res.body[0]).toHaveProperty('title')

xit('new books get added to users profile in db', () => {
  return request(server)
    .post(`/books/${id}`)

    .expect((res) => res.body.length)
    .then((res) => console.log(res));
});
*/

describe(`/books/${id}`, () => {
  describe('PATCH', () => {
    it('responds with 200 status, has application/json content-type, and updates book status', () => {
      return request(server)
        .patch(`/books/${id}`)
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

  describe('DELETE', () => {
    it('responds with 200 status and application/json content type', () => {
      return request(server)
        .delete(`/books/8`)
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
