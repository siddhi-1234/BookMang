const {UserModel,BookModel}=require("../models");

const IssuedBook = require("../dtos/book-dto.js");

exports.getAllBooks=async(req,res)=>{
    const books=await BookModel.find();          /*fetching all data from BookModel table*/
    if(books.length===0){
        return res.status(404).json({
            success:false,
            message:"No book found"
        });
    }
     return res.status(200).json({
        success:true,
        data:books,
    });
    
};

exports.getSingleBookById=async(req,res)=>{
    const {id}=req.params;
    const book=await BookModel.findById(id);
    if(!book){
        return res.status(404).json({
            success:false,
            message:"No book found",
    });
}
 return res.status(200).json({
    success:true,
    message:"Found book by their id",
    data:book,
});
};

exports.getAllIssuedBooks=async(req,res)=>{
    const users=await UserModel.find({
        issuedBook:{$exists:true},
    }).populate("issuedBook");

    // Data Transfer Object(DTO)

    const issuedBooks=users.map((each)=>new IssuedBook(each));

    if(issuedBooks.length===0){
        return res.status(404).json({
            success:false,
            message:"No book have been issued yet..",
    });
}
 return res.status(200).json({
    success:true,
    message:"Users with issued books..",
    data:issuedBooks,
});
};

exports.addNewBook=async(req,res)=>{
    const{data}=req.body;
    if(!data){
        return res.status(400).json({
            success:false,
            message:"No data to add book", 
    });
}
await BookModel.create(data);              
const allBooks=await BookModel.find();
    return res.status(201).json({
        success:true,
        message:"Added book successfully",
        data:allBooks,
});
};

exports.updateBookById=async(req,res)=>{
    const {id}=req.params;
    const {data}=req.body;

    const updatedBook=await BookModel.findOneAndUpdate(
        {
            _id:id,
        },
        data,
        {
        new:true,
        }
    );
     return res.status(200).json({
        success:true,
        message:"Updated book by their id",
        data:updatedBook,
    });
};
