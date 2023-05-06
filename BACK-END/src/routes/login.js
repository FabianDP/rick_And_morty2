const express = require("express");
const router = express.Router();

// const {login, register} = require("../controllers/login");
const postUser = require("../controllers/postUser");
const login=require('../controllers/login')

router.get("/",login)
router.post("/register",postUser)


module.exports= router