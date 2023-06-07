const express = require('express');
const app = express();

// Định nghĩa route handler cho đường dẫn gốc
app.get('/', (req, res) => {
  res.send('Đây là web của Quân <br> Next :  access Database - demo crud');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
