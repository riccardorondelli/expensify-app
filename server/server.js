const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
<<<<<<< HEAD
  res.sendFile(path.join(publicPath, 'index.html'));
=======
  res.sendFile(path.join(publicPath, 'index.html'))
>>>>>>> b654511824d8d542aed674707059cbd03c3dcb09
});

app.listen(port, () => {
  console.log('Server is up!');
<<<<<<< HEAD
});
=======
});
>>>>>>> b654511824d8d542aed674707059cbd03c3dcb09
