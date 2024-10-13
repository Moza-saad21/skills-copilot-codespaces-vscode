// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create comments array
const comments = [
  { username: 'Todd', comment: 'lol that is so funny!' },
  { username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
  { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
  { username: 'onlysayswoof', comment: 'woof woof woof' }
];

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Start server
app.listen(4001, () => {
  console.log('Server listening on 4001');
});