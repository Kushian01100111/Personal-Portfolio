import  Express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// __Firname __dirname 
const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//Envirioment varibles 
dotenv.config({path:'./config/.env'})

//Express setup
const app = Express();

//Cors setup
app.use(cors({
    origin:(origin,callback) => callback(null,true),
    credentials: true
}));

// Body Parsing
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

// Static folder || React files
app.use(Express.static("frontend/build"));





app.listen(process.env.PORT, ()=>{
    console.log("Server is running, you better catch it")
});

