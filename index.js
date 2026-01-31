import express from 'express';
 import dotenv from "dotenv";
 dotenv.config();
 import db from "./config/db.js";
import categoryRoutes from "./routes/category.routes.js";

import productRoutes from "./routes/product.routes.js";



const app= express();
const PORT = process.env.PORT || 5000;
app.set("view engine","ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, ()=>{
   
console.log(`started port at ${PORT}`);

})