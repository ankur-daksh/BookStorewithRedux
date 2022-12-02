import mongoose from 'mongoose';

const bookShema = mongoose.Schema(
  {
    title: { 
      type: String,
      required:true
    },
    description:{
        type: String,
      required:true 
    },
    
  },

  { timestamps: true },
);

const BlogModal = mongoose.model('create_blog', bookShema);

export default BlogModal;
