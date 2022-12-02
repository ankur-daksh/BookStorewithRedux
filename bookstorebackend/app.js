import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDatabase from './config/MongoDb.js';
import bookRoutes from './routes/bookRoutes.js';
import orderRoutes from './routes/orederRoutes.js'
import {handleError} from './helper/error.js'


connectDatabase();



const app = express();

app.use(express.json());
app.use(cors());
app.use('/book', bookRoutes);
app.use('/order', orderRoutes);
app.use((err, _req, res, _next) => {
  console.log('err', err.message);
  handleError(err, res);
});


app.listen(5000, () => {
    
    console.log("i am working!");
  });
  