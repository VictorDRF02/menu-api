const model = "User";
const db = require("../models");
const bcrypt = require('bcrypt');
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

async function get(querys) {
  const { search, pagination, order, direction, limit, offset, category } = 
    querys;
  const users = await db[model].findAndCountAll({
    where: {
      [Op.and]: [
        search && {
          [Op.or]: [
            {name: {[Op.iLike]: '%'+ search +'%'}}
          ]
        }
      ],
    },
    raw: true,
    limit: pagination ? limit : null,
    offset: pagination ? offset : null,
    order: [[order, direction]]
  });
  return users;
}

async function createOrUpdate(body) {
    let user;
    const salt = await bcrypt.genSalt(10);
    if (!body.id) {
      user = await db[model].create({
        name: body.name,
        password: await bcrypt.hash(body.password, salt),
        isAdmin: body.isAdmin,
      });
    } else {
      user = await db[model].findByPk(body.id);
      if (!user) {
        throw new Error(`User with ID ${body.id} not found.`);
      }
  
      await user.update({
        name: body.name,
        password: await bcrypt.hash(body.password, salt),
        isAdmin: body.isAdmin,
      });
    }
    return user;
}

async function del(id) {
  const user = await db[model].findByPk(id);
  if (!user) {
    throw new Error(`User with ID ${id} not found.`)
  }

  await user.destroy();
  return `The user ${id} has been deleted.`;
}

async function getCurrentUser(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
  } catch(err){
    res.status(401).json({"msg":"Couldnt Authenticate"});
  }

    const user = await db[model].findOne({
      where: { id: req.user.id },
      attributes: { exclude: ["password"] },
    });
    if (user === null) {
      res.status(404).json({ msg: "User not found" });
    }
    return user;
}

module.exports = { get, createOrUpdate, del, getCurrentUser };

  