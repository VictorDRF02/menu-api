const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator')
const validator = require('../services/validators/food.validator');
const foodService = require("../services/food.service");

/** GET */
router.get("/", validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const querys = ({
    search,
    order = "name",
    direction = "ASC",
    pagination = true,
    limit = 10,
    offset = 0,
    category,
  } = req.query);

  const foods = await foodService.get(querys);
  res.send(foods);
});

/** POST */
router.post("/", validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const food = await foodService.createOrUpdate(req.body);
  res.send(food);
});

/** PUT */
router.put("/:id", validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const food = await foodService.createOrUpdate(req.body);
  res.send(food);
});

/** DELETE */
router.delete("/:id", validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  res.send(await foodService.del(req.params.id));
});

module.exports = router;
