

const express = require('express')

const bodyParser = require('body-parser')

const mongoose = require('mongoose')


const book_data = require('./router/book_data.routs')

const Book = require('./model/book.model.js')
const axios = require('axios');

const path=require('path')




const { register_book, all_book_data,find_book } = require("./controller/book.controller.js")



// const books = [{
//     bookName: "Rudest Book Ever",
//     bookAuthor: "Shwetabh Gangwar",
//     bookPages: 200,
//     bookPrice: 240,
//     bookState: "Available"
// },
// {
//     bookName: "Do Epic Shit",
//     bookAuthor: "Ankur Wariko",
//     bookPages: 200,
//     bookPrice: 240,
//     bookState: "Available"
// }
// ]


const app = express()

const PORT = 3000



// database connect




async function database() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/book');
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        // You might want to handle this error in a better way, such as retrying or exiting the application
        process.exit(1);
    }
}

// Call the database function
database();


// Fetch book data function using axios
async function fetch_book_data() {


    
}

fetch_book_data()




app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use('/books', book_data)



// Render index page with fetched book data
app.get('/', async (req, res) => {
    const books = await fetch_book_data();
    res.render("index");
});




app.listen(PORT, (req, res) => {

    console.log(`server is run port ${PORT}`);
    console.log( path.join(__dirname, 'views'));
})