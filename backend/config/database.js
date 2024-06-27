import mongoose from 'mongoose';
import database from 'mongoose';

export const connectDatabase =()=>{
    mongoose.connect(process.env.MONGO_URI).then((c)=>{
  console.log(`Mongodb connect to :${c.connection.host}`);
    }).catch((e)=>{
        console.log(e);
    });
};