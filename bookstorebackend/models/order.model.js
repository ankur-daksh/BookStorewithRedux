import mongoose from 'mongoose';

const orderShema = mongoose.Schema(
  {
  
    shippingInfo: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
  
      state: {
        type: String,
        required: true,
      },
    },
    contactInfo: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    book: {
      type: mongoose.Schema.ObjectId,
      ref: "create_blog",
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    
  },

 
);

const BlogModal = mongoose.model('order_schema', orderShema);

export default BlogModal;
