//dependencies
const express = require("express");
const rout=require("./rutas");
const path=require("path");
// application
const app = express();
//habilitar
app.set("view engine","pug");
app.set("views",path.join(__dirname,"./views"))
//const
const port=8080;
const domain="localhost";

// listen
app.listen(8080,()=>console.log(`running server http://${domain}:${port}`));

//handler
app.use("/",rout())
