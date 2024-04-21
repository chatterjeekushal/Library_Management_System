
const express = require('express')

const mongoose = require('mongoose')


const book_schema = new mongoose.Schema({


    bookName: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    },
    bookPages: {
        type: String,
    },
    bookPrice: {
        type: String,
        required: true
    },
    bookState: {
        type: String,
        required: true
    },
    bookstock:{
        type:String,
        
    }



}, { timestamps: true })



module.exports=mongoose.model('Book',book_schema)

