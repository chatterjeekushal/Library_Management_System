

const express=require('express')

const app=express()

const router=express.Router()

const {register_book,all_book_data,find_book,change_book_price,change_book_Availability,change_book_stock,delete_book}=require("../controller/book.controller.js")

const bodyParser=require("body-parser")

app.set('view engine', 'ejs')



router.get("/", async (req,res)=>{

    

    res.render("add_book")
})

router.get("/find_book",async (req,res)=>{

    

    res.render("find_book")
})


router.get("/change_price",async (req,res)=>{

    

    res.render("change_price")
})


router.get("/change_Availability",async (req,res)=>{

    

    res.render("change_Availability")
})


router.get("/change_stock",async (req,res)=>{

    

    res.render("change_stock")
})


router.get("/delete_book",async (req,res)=>{

    

    res.render("delete_book")
})















router.route("/add_book").post(register_book)

router.route("/allbook").get(all_book_data)


router.route("/change_price").post(change_book_price)

router.route("/change_Availability").post(change_book_Availability)

router.route("/change_stock").post(change_book_stock)

router.route("/find_book").post(find_book)


router.route("/delete_book").post(delete_book)

// router.route("/find_book_data").post(async (req, res) => {
//     // Execute the find_book function
//     const bookData = await find_book(); // Assuming find_book returns some data

//     // Render the "find_book" view and pass the retrieved data to it
//     res.render("find_book", { bookData });
// });




module.exports=router