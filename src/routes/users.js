const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator')
const validator = require('../services/validators/user.validator');
const userService = require("../services/user.service");

/** GET */
router.get("/", async (req, res) => {
  const querys = {};
  querys.search = req.query.search;
  querys.order = req.query.order || 'name';
  querys.direction = req.query.direction || 'ASC';
  querys.pagination = req.query.pagination != 'false';
  querys.limit = req.query.limit || 10;
  querys.offset = req.query.offset || 0;

  const users = await userService.get(querys);
  res.send(users);
});

/** POST */
router.post("/", validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const user = await userService.createOrUpdate(req.body);
  res.send(user);
});

/** PUT */
router.put("/:id", validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const user = await userService.createOrUpdate(req.body);
  res.send(user);
});

/** DELETE */
router.delete("/:id", async (req, res) => {
  res.send(await userService.del(req.params.id));
});

router.get('/me',
 async(req,res,next)=>{
  const user = await userService.getCurrentUser(req,res,next);
  res.send(user);
  },
); 

module.exports = router;
