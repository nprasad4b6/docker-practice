const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });


app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});