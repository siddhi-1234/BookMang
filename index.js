const express=require("express");

const {users}=require("./data/users.json")

const app=express();
const PORT=8081;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is up and running :-)",
        data:"hey",
    });
});

app.get("*",(req,res)=>{
    res.status(404).json({
        message:"this route doesn't exist",
    });
});
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)

})

/*
*Routers:/users
*Method:GET
*Description:Get all users
*Access:Public
*Parameters:None
*/