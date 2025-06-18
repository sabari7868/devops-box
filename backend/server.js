// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Route to respond on GET /
// app.get('/', (req, res) => {
//   res.send('Hello from the backend!');
// });
// app.get('/about', (req, res) => {
//   res.send('This is the about page');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Allow all origins
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

// Listen on 0.0.0.0 for Docker
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
