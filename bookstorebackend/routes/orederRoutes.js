
import express from 'express';
import { orderRegister } from '../controller/orderController.js';


const router = express.Router();




router.post('/createOrder',  orderRegister);




export default router;
