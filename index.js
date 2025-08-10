const express = require('express');
const app = express();

app.get('/api/autoinstallrindev.js', (req, res) => {
  res.json({ message: "Hello from RinDev API!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
