const express=require("express");

const{getAllUsers,getSingleUserById,deleteUser,updateUserData,createNewUser}=require("../controllers/user-controller");

const {users}=require("../data/users.json");

const {UserModel,BookModel}=require("../models/index");

const router=express.Router();

// Get all the user info here
/*
*Routers:/users
*Method:GET
*Description:Get all users
*Access:Public
*Parameters:None
*/

const { Router } = require("express");


router.get("/",getAllUsers);
  

//  Get user by id
/*
*Routers:/users/:id
*Method:GET
*Description:Get single user by id
*Access:Public
*Parameters:id
*/

router.get("/:id",getSingleUserById);
    

// create new user
/*
*Routers:/users
*Method:POST
*Description:Creating new user
*Access:Public
*Parameters:None
*/

router.post("/",createNewUser);

// Update user by their id
/*
*Routers:/users/:id
*Method:PUT
*Description:Updating user by id
*Access:Public
*Parameters:id
*/

router.put("/:id",updateUserData);
    


    // Delete user by id
    /*
    *Routers:/users/:id
    *Method:DELETE
    *Description:Delete user by id
    *Access:Public
    *Parameters:id
    */

    router.delete("/:id",deleteUser);
        

    // Get user subscription details
    /*
    *Routers:/users/subscription-details/:id
    *Method:GET
    *Description:Get all user subscription details
    *Access:Public
    *Parameters:id
    */

    // router.get("/subscription-details/:id",(req,res)=>{
    //     const {id}=req.params;
    //     const user=users.find((each)=>each.id===id);
    //     if(!user){
    //         return res.status(404).json({
    //             success:false,
    //             message:"User with id don't exist",
    //         });
    //     }
    //     const getDateInDays=(data="")=>{
    //         let date;
    //         if(data===""){              /*if data is blank then consider current date*/
    //             date=new Date();
    //         }else{                       /*if data is passed then pass it to date variable*/
    //             date=new Date(data);
    //         }
    //         let days=Math.floor(date/(1000*60*60*24));        /*to cal days using floor func to divide it
    //                                                              calculated from Jan 1 1970 UTC*/
    //         return days;
    //     };
    //     const subscriptionType=(date)=>{
    //         if((user.subscriptionType==="Basic")){
    //             date=date+90;                               /*3 mon=30*3*/
    //         }else if((user.subscriptionType==="Standard")){
    //             date=date+180;                              /*6 mon=30*6*/
    //         }else if((user.subscriptionType==="Premium")){
    //             date=date+365;                              /*12 mon=30*12*/
    //         }
    //         return date;
    //     };
    //     let returnDate=getDateInDays(user.returnDate);
    //     let currentDate=getDateInDays();
    //     let subscriptionDate=getDateInDays(user.subscriptionDate);
    //     let subscriptionExpiration=subscriptionType(subscriptionDate);

    //     const data={
    //         ...user,
    //         isSubscriptionExpired:subscriptionExpiration<=currentDate,
    //         daysLeftForExpiration:subscriptionExpiration<=currentDate?0:subscriptionExpiration-currentDate,
    //         fine:returnDate<currentDate?subscriptionExpiration<=currentDate?100:50:0,
    //     };
    //     return res.status(200).json({
    //         success:true,
    //         message:"Subscription detail for user is:",
    //         data,
    //     });
    // });


module.exports=router;