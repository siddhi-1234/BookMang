const {UserModel,BookModel}=require("../models");

exports.getAllUsers=async(req,res)=>{
    const users=await UserModel.find();

    if(users.length===0){
        return res.status(404).json({
            success:false,
            message:"No users found in db",
        });
    }
    return res.status(200).json({
        success:true,
        message:"These are user info",
        data:users,
    });
};

exports.getSingleUserById=async(req,res)=>{
    const{id}=req.params;
    const user=await UserModel.findById({_id:id});
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User doesn't exist!",
        });
    }
    return res.status(200).json({
        success:true,
        message:"User found",
        data:user,
    });
};

exports.deleteUser=async(req,res)=>{
    const{id}=req.params;
    const user=await UserModel.deleteOne({_id:id});
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User doesn't exist!!",
        });
    }
    return res.status(200).json({
        success:true,
        message:"Deleted user",
        data:user
    });
};

exports.updateUserData=async(req,res)=>{
    const{id}=req.params;
    const{data}=req.body;
    const updatedUserDate=await UserModel.findOneAndUpdate(
        {_id:id},
        {$set:{
            ...data
        }},
        {new:true}
    );
    return res.status(200).json({
        success:true,
        message:"User Updated!!",
        data:updatedUserDate,
    });
};

// exports.createNewUser=async(req,res)=>{
//     const{data}=req.body;
//     if(!data){
//         return res.status(400).json({
//             success:false,
//             message:"No data to add user", 
//     });
// }
// await UserModel.create(data);              
// const allUsers=await UserModel.find();
//     return res.status(201).json({
//         success:true,
//         message:"Added user successfully",
//         data:allUsers,
// });
// };