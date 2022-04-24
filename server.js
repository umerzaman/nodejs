const express = require('express');
const app = express();

app.use(express.json());

const subscriberRouter = require('./routes/subscriber');
app.use('/subscriber',subscriberRouter);

app.listen(3000,()=>console.log('server started'))