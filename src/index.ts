import express from "express";
import "dotenv/config"
const app = express();


app.listen(8020, ()=>{
    console.log("Server running at 8020");
});

