const express=require("express");
const dotenv=require("dotenv");

const DbConnection=require("./databaseConnection");

const {users}=require("./data/users.json");
// const {books}=require("./data/books.json");
const userRouter=require("./routes/users.js");
const bookRouter=require("./routes/books.js");

dotenv.config();


const app=express();

DbConnection();

const PORT=8081;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is up and running",
        data:"hey",
    });
});

app.use("/users",userRouter);
app.use("/books",bookRouter);



app.get("*",(req,res)=>{
    res.status(404).json({
        message:"this route doesn't exist",
    });
});
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)

})
