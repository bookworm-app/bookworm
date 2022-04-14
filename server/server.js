const express = require('express');
const app = express();
const path = require('path');


const PORT = 3000;

app.use(express.json());

// require routers
const booksRouter = require(path.join(__dirname,'./routes/books'));
const reviewsRouter = require(path.join(__dirname,'./routes/reviews'));
const authRouter = require('./routes/authRouter')

// app entry for production
if(process.env.NODE_ENV === 'production'){
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  })
}

// use routers
app.use('/books', booksRouter);
app.use('/reviews', reviewsRouter);
// app.use('/auth',authRouter);

// 404 handler
app.use('*', (req, res) => {
  console.log('Error: Client attempted access to unknown route');
  res.status(404).send('That page does not exist!')
})

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message.err);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
})

module.exports = app;
