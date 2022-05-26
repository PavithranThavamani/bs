const BookModel = require("../model/BookModel");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await BookModel.find();
  } catch (error) {
    console.log(error);
  }

  if (!books) {
    return res.status(404).json({ msg: "No products found" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await BookModel.findById(id);
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ msg: "No book found" });
  }
  return res.status(200).json({ book });
};

const updateBooks = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await BookModel.findByIdAndUpdate(id, {
      name,
      description,
      author,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ msg: "No book to update by this id" });
  }
  return res.status(200).json({ book });
};

const deleteBooks = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await BookModel.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ msg: "Deleted Successfully" });
  }
  return res.status(200).json({ book });
};

const addBooks = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;

  let book;
  try {
    book = new BookModel({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(500).json({ msg: "Unable to add" });
  }

  return res.status(201).json({ book });
};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBooks = updateBooks;
exports.deleteBooks = deleteBooks;
