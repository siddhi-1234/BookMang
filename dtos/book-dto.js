// Data Transfer Object-Book

class IssuedBook{
    _id;
    name;
    genre;
    price;
    Publisher;
    issuedBy;
    issuedDate;
    returnDate;

    constructor(user){
        this._id=user.issuedBook._id;
        this.name=user.issuedBook.name;
        this.genre=user.issuedBook.genre;
        this.price=user.issuedBook.price;
        this.Publisher=user.issuedBook.Publisher;
        this.issuedBy=user.issuedBy;
        this.issuedDate=user.issuedDate;
        this.returnDate=user.returnDate;

    }
}

module.exports=IssuedBook;