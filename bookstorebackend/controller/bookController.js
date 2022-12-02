import express from "express";
import BookModel from '../models/book.model.js'
import { ErrorHandler } from '../helper/error.js';



export const bookRegister = async (req, res) => {
    try {
        console.log(req.body)
        const {title,description} = req.body;

        const newUser = await BookModel.create({
            title,
            description
          });
          
          if(!newUser)
          {
            throw new ErrorHandler(400, 'Bad request');
          }
        
          return res.send({ code: 200,newUser, msg: 'book create'});


    
    } catch (err) {
      next(err)
      
    }
  };

  export const bookDetails = async (req, res,next) => {
    try {
     
      const isUser = await BookModel.find()
      if(!isUser)
      {
      throw new ErrorHandler(400, 'Book Details Not found');
    }
      return res.send({ code: 200, books: isUser });
    } catch (err) {
      next(err)
      
    }
  };


  export const searchbookDetails = async (req, res) => {
    try {
     console.log("req.params.key",req.query)
      let result = await BookModel.find({
        
          
                title: { $regex: req.query.value}  
          
      
    });
    if(!result)
    {
      throw new ErrorHandler(400, 'Bad request'); 
    }
   
    return res.send({ code: 200, books: result });
    } catch (err) {
     
      next(err)
    }
  };