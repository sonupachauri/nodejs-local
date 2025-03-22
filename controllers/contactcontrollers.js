//@desc Get all contacts
// GET api/contacts
//@access public

const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({messgae:"hello, Get all contacts"})
});

const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({messgae:"hello, Get one contact"})
});

const createContact = asyncHandler(async(req,res)=>{
    // console.log("The request body is :",req.body)

    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    res.status(200).json({messgae:"hello, Create new contact"})
});

const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({messgae:"hello, Update contact"})
});

const deleteContact = asyncHandler(async(req,res)=>{
    res.status(201).json({messgae:"hello, delete contacts"})
});

module.exports = {getContacts,getContact,createContact,updateContact,deleteContact}