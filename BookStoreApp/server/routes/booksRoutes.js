const router = require("express").Router();
const bookModel = require("../models/booksModels");

//post request
router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then( () => {
            res.status(200).json({message: "Book added successfully"});
        })

    } catch (error) {
        console.log(error);
    }
})

//get all books
router.get("/getBooks", async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({ books });
    } catch (error) {
        console.log(error);
    }
});

//get books by their _id
router.get("/getBooks/:id", async (req, res) => {
    let books;
    const id = req.params.id;
    try {
       books = await bookModel.findById(id);
       res.status(200).json({ books });
    } catch (error) {
        console.log(error);
    }
})

//update book by id
router.put("/updateBook/:id", async (req, res) => {
    let book;
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    try {
        book = await bookModel.findByIdAndUpdate(id, { bookname, description, author, image, price });
        await book.save().then(() => 
            res.status(200).json({message: "Book updated successfully"}));
    } catch (error) {
        console.log(error);
    }
})

//Delete book by id
router.delete("/deleteBook/:id", async (req, res) => {
    let book;
    const id = req.params.id;
    try {
        book = await bookModel.findByIdAndDelete(id).then(() =>{
            res.status(200).json({message: "book deleted successfully"});
        })
    } catch (error) {
        console.log(error);                
    }
})

module.exports = router;
