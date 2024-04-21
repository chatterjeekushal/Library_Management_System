

const express = require('express')

const body = require('body-parser')

const Book = require('../model/book.model.js')


var path = require('path');








const register_book = async (req, res) => {


    let { bookName, bookAuthor, bookPages, bookPrice, bookState, bookstock } = req.body

    console.log(bookName, bookAuthor, bookPages, bookPrice, bookState);


    const book = new Book({ bookName: bookName, bookAuthor: bookAuthor, bookPages: bookPages, bookPrice: bookPrice, bookState: bookState, bookstock: bookstock })


    const book_data = await book.save()

    const message = "Book Add  successfully!";
    

    res.render(path.resolve('./views/message'),{message:message})

        
}





const all_book_data = async (req, res) => {

    try {
        const all_book = (await Book.find({}));

        res.json({ bookdata: all_book })

    } catch (error) {

        new Error(`all book data fatch poblem ${error}`)
    }
}












const find_book = async (req, res) => {


    try {
        const { bookName } = req.body

        if (!bookName) {

            new Error("enter your book name")
        }



        let book_data = await Book.findOne({ bookName })



        res.render(path.resolve('./views/view_find_data'),{book_data:book_data})
        


    } catch (error) {

        new Error(`find book ${error}`)

    }

}










const change_book_price = async (req, res) => {
    try {
        const { bookName, updateprice } = req.body;
        console.log(bookName, updateprice);

        const filter = { bookName: bookName };

        const updatedBook = await Book.findOneAndUpdate(filter, { $set: { bookPrice: updateprice } }, { new: true });

        // Assuming message is defined somewhere else or you want to render a message saying the update was successful
        const message = "Book price updated successfully!";

        res.render(path.resolve('./views/message'),{message:message}) // Pass message to the template

    } catch (error) {
        console.log(`book price error is ${error}`);
        // Handle the error properly, maybe render an error page or send an error response
    }
}









const change_book_Availability = async (req, res) => {


    try {
        const { bookName, updateAvailability } = req.body

        console.log(bookName, updateAvailability);

        const filter = { bookName: bookName }; // Assuming the name field is used to identify books

        // becouse find one give an object

        await Book.findOneAndUpdate(filter, { $set: { bookState: updateAvailability } }, { new: true })

        const message = "Book Availability updated successfully!";

        res.render(path.resolve('./views/message'),{message:message})

    } catch (error) {

        console.log(`book price error is ${error}`);
    }

}






const change_book_stock=async(req,res)=>{

    try {
        const { bookName, updatestock } = req.body

        console.log(bookName, updatestock);

        const filter = { bookName: bookName }; // Assuming the name field is used to identify books

        // becouse find one give an object

        await Book.findOneAndUpdate(filter, { $set: { bookstock: updatestock } }, { new: true })

        const message = "Book stock updated successfully!";

        res.res.render(path.resolve('./views/message'),{message:message})

    } catch (error) {

        console.log(`book price error is ${error}`);
    }

}








const delete_book = async (req, res) => {
    try {
        const { bookName } = req.body;

        const filter = { bookName: bookName }; // Assuming the name field is used to identify books

        // Use findOneAndDelete to find and delete the book
        const deletedBook = await Book.findOneAndDelete(filter);

        if (!deletedBook) {
            // If the book was not found, send a 404 Not Found status
            return res.status(404).json({ message: "Book not found" });
        }

        const message = "Book Delete updated successfully!";

        // If the book was successfully deleted, send a success message
        res.render(path.resolve('./views/message'),{message:message})
    } catch (error) {
        // If an error occurs, send a 500 Internal Server Error status
        res.status(500).json({ message: "Internal Server Error" });
    }
};







module.exports = { register_book, all_book_data, find_book, change_book_price,change_book_Availability,change_book_stock,delete_book }
