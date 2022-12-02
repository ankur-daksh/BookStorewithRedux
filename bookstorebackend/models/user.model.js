import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
    name: { 
      type: String,
    
    },
    phone:{
      type:Number
    },
   email:{
    type:String
   }
    
  },

  { timestamps: true },
);

const UserModel = mongoose.model('User', schema);

export default UserModel;
