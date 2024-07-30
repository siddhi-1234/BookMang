const express=require("express");

const {getAllBooks, getSingleBookById,getAllIssuedBooks,addNewBook,updateBookById}=require("../controllers/book-controller");

const {books}=require("../data/books.json");
const {users}=require("../data/users.json");

const {UserModel,BookModel}=require("../models/index");

const router=express.Router();


// Get all the books
    /*
    *Routers:/books
    *Method:GET
    *Description:Getting all books
    *Access:Public
    *Parameters:None
    */

    router.get("/",getAllBooks);
   

    
    // get all issued books
    /*
    *Routers:/books/issued
    *Method:GET
    *Description:Getting all issued books
    *Access:Public
    *Parameters:None
    */

    router.get("/issued/by-user",getAllIssuedBooks);
        




    // Get the books by id
    /*
    *Routers:/books/:id
    *Method:GET
    *Description:Getting books by id
    *Access:Public
    *Parameters:id
    */

    router.get("/:id",getSingleBookById);
       

    // Create/add new book
    /*
    *Routers:/books
    *Method:POST
    *Description:Creating new book
    *Access:Public
    *Parameters:None
    */

   router.post("/",addNewBook);
   

// Update book by their id
/*
*Routers:/books/:id
*Method:PUT
*Description:Updating book by id
*Access:Public
*Parameters:id
*/

router.put("/updateBook/:id",updateBookById);
    



module.exports=router;