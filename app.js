gconst express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, helleeeervrgrvgbttfvfbetttcdcbtgbtcdcdcdfvfffccggrero');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
