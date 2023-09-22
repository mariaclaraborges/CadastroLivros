import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:1234@alura.n9gsu4p.mongodb.net/alura-node");

const db = mongoose.connection;

export default db;