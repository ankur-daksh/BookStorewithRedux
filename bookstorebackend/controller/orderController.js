import express from "express";
import orderModel from '../models/order.model.js'
import { ErrorHandler } from '../helper/error.js';



export const orderRegister = async (req, res,next) => {
    try {
        console.log(req.body)
       const { address,city,state,name,phone,email,bookId} = req.body;
       
       const shippingInfo ={
        address,
        city,
        state
       }
    
       const contactInfo ={name,phone,email}
       if(!shippingInfo)
       {
        throw new ErrorHandler(400, 'shipping address undefined'); 
       }
       if(!contactInfo)
       {
        throw new ErrorHandler(400, 'contact address undefined'); 
       }
    
    
       const order = await orderModel.create({
        shippingInfo,
        contactInfo,
        user:'6388db03f21ce16341e8a0c7',
        book:bookId

      
      });

      return res.send({ code: 200, order: order });
    } catch (err) {
      next(err)
      
    }
  };


 