import router from '../src/mead/routes/index.jsx';

const express = require('express');
const path = require('path');

const app = express();

const andre = 3000;

const port = process.env.PORT || andre;

const assets = express.static(path.resolve(__dirname, '../../distNear/'));

app.use(assets);
app.use('/', router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

export default app;
