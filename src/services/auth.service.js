const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const dotenv = require("dotenv");
dotenv.config();

async function login(username, password, res) {
    const user = await db['User'].findOne({ where: { name: username } });

    if(user){
        const passwordMatch = await bcrypt.compare(password,user.password);
        if(passwordMatch){
            token = jwt.sign({ "id" : user.id, "name":user.name, "isAdmin":user.isAdmin },process.env.SECRET,{ expiresIn: '30m' });
            res.status(200).json({ token : token });
        } else {
          res.status(401).json("Incorrect password");
        }
      
      }else{
        res.status(404).json("User does not exist");
      }
}

module.exports = { login };
