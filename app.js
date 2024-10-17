const express = require('express');
// Create an instance of the Express app
const app = express();
// Define a route
app.get('/', (req, res) => {
res.send('Hello, World!');
});
// Start the server
const port = 3000;
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
