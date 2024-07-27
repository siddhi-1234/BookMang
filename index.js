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

    // Delete user by id
    /*
    *Routers:/users/:id
    *Method:DELETE
    *Description:Delete user by id
    *Access:Public
    *Parameters:id
    */

    app.delete("/users/:id",(req,res)=>{
        const {id}=req.params;
        const user=users.find((each)=>each.id===id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User doesn't exist!",
            });
        }
        const index=users.indexOf(user);
        users.splice(index,1);
        return res.status(200).json({
            success:true,
            message:"Deleted user",
            data:users
        });
    });

    // Get all the books
    /*
    *Routers:/books
    *Method:GET
    *Description:Getting all books
    *Access:Public
    *Parameters:None
    */

    app.get("/books",(req,res)=>{
        res.status(200).json({
            success:true,
            message:"Got all books",
            data:books
        });
    });

    
    // get all issued books
    /*
    *Routers:/books/issued
    *Method:GET
    *Description:Getting all issued books
    *Access:Public
    *Parameters:None
    */

    app.get("/books/issued",(req,res)=>{
        const userWithIssuedBook=users.filter((each)=>{   /*filter method to find issuedBook*/
            if(each.issuedBook)return each;
        });
        const issuedBooks=[];           /*new array to store issuedBooks*/
        userWithIssuedBook.forEach((each)=>{             /*forEach loop for relationship between id and issuedBook*/
            const book=books.find((book)=>(book.id=each.issuedBook));    /*checking if id of book is present in userwith same id*/

            book.issuedBy=each.name;              /*fetching data*/
            book.issuedDate=each.issuedDate;
            book.returnDate=each.returnDate;

            issuedBooks.push(book);        /*pushing all data to new array ie issuedBooks*/
        });
        if(issuedBooks.length===0){         /*if issuedBooks contains no value then book is not issued*/
            return res.status(404).json({
                success:false,
                message:"No book have been issued",
            });
        }
        return res.status(200).json({
            success:true,
            message:"Users with issued books",
            data:issuedBooks,
        });
    });




    // Get the books by id
    /*
    *Routers:/books/:id
    *Method:GET
    *Description:Getting books by id
    *Access:Public
    *Parameters:id
    */

    app.get("/books/:id",(req,res)=>{
        const {id}=req.params;
        const book=books.find((each)=>each.id===id)
        if(!books){
            return res.status(404).json({
                success:false,
                message:"Book not found",
            });
        }
        return res.status(200).json({
            success:true,
            message:"Found book by id",
            data:book,
        });
    });

    // Create/add new book
    /*
    *Routers:/books
    *Method:POST
    *Description:Creating new book
    *Access:Public
    *Parameters:None
    */

app.post("/books",(req,res)=>{
    const{id,name,author,genre,price,publisher}=req.body;
    const book=books.find((each)=>each.id===id);  /*checking whether id exist or not*/
    if(book){
        return res.status(404).json({
            success:false,
            message:"book with ID exists",
});
    }
    books.push({
        id,
        name,
        author,
        genre,
        price,
        publisher,
    });
    return res.status(201).json({
        success:true,
        message:"book added successfully",
        data:books,
    });
});

// Update book by their id
/*
*Routers:/books/:id
*Method:PUT
*Description:Updating book by id
*Access:Public
*Parameters:id
*/

app.put("/books/:id",(req,res)=>{
    const {id}=req.params;
    const {data}=req.body;
    const book=books.find((each)=>each.id===id);  /*checking whether id exist or not*/
    if(!book){
        return res.status(404).json({
            success:false,
            message:"book doesn't exists",
});
    }
    const updateBookData=books.map((each)=>{
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
        message:"book updated!",
        data:updateBookData,
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
