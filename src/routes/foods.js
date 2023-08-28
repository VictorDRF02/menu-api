const express = require("express");
const router = express.Router();
const foodService = require("../services/food.service");

/** GET */
router.get("/", async (req, res) => {
  const querys = {};
  querys.search = req.query.search;
  querys.order = req.query.order || 'name';
  querys.direction = req.query.direction || 'ASC';
  querys.pagination = req.query.pagination != 'false';
  querys.limit = req.query.limit || 10;
  querys.offset = req.query.offset || 0;
  querys.category = req.query.category;

  const foods = await foodService.get(querys);
  res.send(foods);
});

/** POST */
router.post("/", async (req, res) => {
  const food = await foodService.createOrUpdate(req.body);
  res.send(food);
});

/** PUT */
router.put("/:id", async (req, res) => {
  const food = await foodService.createOrUpdate(req.body);
  res.send(food);
});

/** DELETE */
router.delete("/:id", async (req, res) => {
  res.send(await foodService.del(req.params.id));
});

module.exports = router;
