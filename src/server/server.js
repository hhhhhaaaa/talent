import router from '../mead/routes/index';

const express = require('express');
const path = require('path');
const port = require('./config.js');

const app = express();

const andre = 3000;

export const port = config || andre;

const assets = express.static(path.resolve(__dirname, '../../distNear/'));

app.use(assets);
app.use('/', router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

export default app;
