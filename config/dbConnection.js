const mongoose = require("mongoose")

const connectDb = async ()=>{
    const mongoose = require('mongoose');

    // Correct way to connect (replace with your actual URI)
    mongoose.connect('mongodb+srv://admin:admin@cluster0.srx77.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/mycontacts-backened', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
    
}

module.exports = connectDb;


// const contactSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     }
// }, {timestamps:true})

// export const contact = mongoose.model('contacts', contactSchema)