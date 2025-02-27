import { Book } from "../models/bookModels.js";


// saving book to database
export const createBook = async (req, res) => {
    try {
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};



// geting all books from database

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).send(books);

    } catch {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
};

// get one book
export const getoneBook = async (req, res) => {

    try {
        const id = req.params.id;
        const books = await Book.findById(id);
        res.status(200).send(books);

    } catch {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
};

//update a book

export const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            res.status(404).send({ message: "Book not found" });
        } else {
            res.status(200).send({ message: "Book updated successfully" });
        }
    } catch {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
};

//delete a book

export const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            res.status(404).send({ message: "Book not found" })
        } else {
            res.status(200).send({ message: "Book delete successfully" });

        }

    } catch {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}