/**
 * Supertest is used to test the functionality of the books.js router 
 */

const request = require('supertest');
const server = 'http://localhost:3000';

//not sure if we need this or it's just a general test to see if the server is working;why is content type text? 
describe('Route integration', () => {
    describe('/', () => {
      describe('GET', () => {
        /* Note that we return the evaluation of `request` here! It evaluates to
        // a promise, so Jest knows not to say this test passes until that
        promise resolves. See https://jestjs.io/docs/en/asynchronous*/ 
        xit('responds with 200 status and text/html content type', () => {
          return request(server)
            .get('/')
            .expect('Content-Type', /text\/html/)
            .expect(200);
        });
      });
    });
/* what is being tested: router.get('/:id', booksController.getBooks, (req, res) => {
                        res.status(200).json(res.locals.booklist);
                        });
*/
    describe('/:id', () => {
        describe('GET', () => {
          xit('responds with 200 status and application/json content type', () => {
            return request(server)
              .get('/:id')
              .expect('Content-Type', /json/)
              .expect(200);
          });
          xit('users favorite books are in body of response', () => {
            return request(server)
              .get('/:id')
              .expect((res) => {
                if (!Array.isArray(res.body)) throw new Error('Is not an array');
            });
          });
        });
       
        /* what is being tested: router.post('/:id', booksController.addBook, (req, res) => {
                                res.status(200).json(res.locals.newBook);
                                }                    
        */
         describe('POST', () => {
             xit('responds with 200 status and application/json content type', () => {
               return request(server)
                 .post('/:id')
                 .expect('Content-Type', /json/)
                 .expect(200);
             });
             xit('new books gets added to users profile in db', () => {
                //  return request(server)
                //    .post('/:id')
                //    .expect((res) => {
                //      if (!Array.isArray(res.body)) throw new Error('Is not an array');
                //    });
             });
            }
        }

        describe('/:all', () => {





/* what is being tested: router.get('/all', booksController.getBooks, (req, res) => {
                                res.status(200).json(res.locals.booklist);
                                }) 
        */
        describe('GET', () => {
            it('responds with 200 status and application/json content type', () => {
              return request(server)
                .get('/:all')
                .expect('Content-Type', /json/)
                .expect(200);
            });
            it('all books in db', () => {
                return request(server)
                  .get('/:all')
                  .expect((res) => {
                    if (!Array.isArray(res.body)) throw new Error('Is not an array');
                  });
            });



    }
}





router.patch('/:id', booksController.updateBookStatus, (req, res) => {
    res.status(200).json(res.locals.updatedBook);
});

router.delete('/:id', booksController.removeBook, (req, res) => {
    res.status(200).json(res.locals.deletedBook);
});

module.exports = router;