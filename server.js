const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

// Send index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Local server
app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});

// Export the Express API for Vercel
module.exports = app;