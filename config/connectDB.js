//1- require mongoose
const mongoose= require ("mongoose");

//2- create DB 

const connectDB= async () => {
    try{
        //step 1
        await mongoose.connect(process.env.DB_URL)
        // step 2 
        console.log('Database connected ..')
    } catch (error) {
        console.log("Can not connect !!!",error);
    }
};
//3- export

module.exports=connectDB;