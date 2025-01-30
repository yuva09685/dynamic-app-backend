const app = require('./app');

// Default to port 5000 if not set by environment
const PORT = 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
