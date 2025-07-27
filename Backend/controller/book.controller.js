import Book from "../model/book.model.js";

export const getBook = async (req, res)=>{

    try{
        const book=Book.find()
        res.status(200).json(book)
    }catch(erroe){
        console.log("Errorr: ",erroe)
        res.status(500).json(erroe)
    }
}