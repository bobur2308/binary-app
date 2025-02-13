const express = require('express');
const path = require('path');
const binaryRoutes = require('./routes/binary.router');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use the binary routes from the router file
app.use('/binary', binaryRoutes);

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'Binary Program' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
