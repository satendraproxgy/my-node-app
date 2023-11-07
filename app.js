const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;


// Define routes and middleware
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/getData', (req, res) => {
    res.send('My Name is Sattu');
  });

  app.get('/getDataResults', (req, res) => {
    res.send('My Name is getDataResults');
  });


  // Define a route and controller
app.get('/api/books', (req, res) => {
    // You can query a database, fetch data, and send it as a response
    const books = [
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' },
    ];
  
    res.json(books);
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
