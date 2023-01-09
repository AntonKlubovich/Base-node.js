import express from 'express';
import home from './home.js';
import errorHandler from './errorHandler.js';
import info from './info.js';


const app = express();
const PORT = 5000;

app.get('/', home);
app.post('/info', info);

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});