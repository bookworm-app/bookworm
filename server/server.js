const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
//google auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '976047376765-06alm0ga8c4s75vlci7s15hh87lmbe2a.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);
const { google } = require('googleapis');
const http = require('http');
const https = require('https');
const url = require('url');


const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
// require routers
const booksRouter = require(path.join(__dirname,'./routes/books'));
const reviewsRouter = require(path.join(__dirname,'./routes/reviews'));

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






app.post('/login', (req, res) => {
  main().catch(console.error);
  let token = req.body.token;

  console.log("test: " + token)
  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
    console.log(payload)
  }
  verify()
  .then(() => {
    res.cookie('session-token', token );
    res.send('success');
  })
})

















//e8ec210628306b1df26ff61e6b9b3195814a2d79d38a2c7c1dc5836f6ddd7143
//2454060688dcc80a5b35d45bf6a50d21fd4951bc
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
