const express = require("express");
const app = express();
// const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const contactroutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection")

connectDb();

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

app.use(express.json());

app.use("/api/contacts",contactroutes);
app.use(errorHandler);
// app.get('/api/contacts',(req,res)=>{
//  res.json({messgae:"hello, from contacts"})
// })