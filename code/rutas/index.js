const express=require("express");
const controller=require("../controllers")
const router = express.Router();

module.exports=function(){
    router.get("/",controller.view)
    router.get("/hello",controller.hello)
    return router
}

