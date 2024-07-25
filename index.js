const express=require("express");

const {users}=require("./data/users.json");
const {books}=require("./data/books.json");

const app=express();

const PORT=8081;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is up and running",
        data:"hey",
    });
});

// Get all the user info here
/*
*Routers:/users
*Method:GET
*Description:Get all users
*Access:Public
*Parameters:None
*/


app.get("/users",(req,res)=>{
    res.status(200).json({
        success:true,
        data:books,
    });
});

//  Get user by id
/*
*Routers:/users/:id
*Method:GET
*Description:Get single user by id
*Access:Public
*Parameters:id
*/

app.get('/users/:id',(req,res)=>{
    const {id}=req.params;
    const user=users.find((each)=>each.id===id);  /*checking whether id exist or not*/
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User doesn't exist!!"
        });
    }
    return res.status(200).json({
        success:true,
        message:"User found",
        data:user,
    });
});

// create new user
/*
*Routers:/users
*Method:POST
*Description:Creating new user
*Access:Public
*Parameters:None
*/

app.post("/users",(req,res)=>{
    const{id,name,surname,email,subscriptionType,subscriptionDate}=req.body;
    const user=users.find((each)=>each.id===id);  /*checking whether id exist or not*/
    if(user){
        return res.status(404).json({
            success:false,
            message:"User with ID exists",
});
    }
    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate,
    });
    return res.status(201).json({
        success:true,
        message:"User added successfully",
        data:users,
    });
});

// Update user by their id
/*
*Routers:/users/:id
*Method:PUT
*Description:Updating user by id
*Access:Public
*Parameters:id
*/

app.put("/users/:id",(req,res)=>{
    const {id}=req.params;
    const {data}=req.body;
    const user=users.find((each)=>each.id===id);  /*checking whether id exist or not*/
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User doesn't exists",
});
    }
    const updateUserData=users.map((each)=>{
        if(each.id===id){
            return{
                ...each,
                ...data,
            };
        }
        return each;
    });
    return res.status(200).json({
        success:true,
        message:"User updated!",
        data:updateUserData,
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
