const express = require("express");
const router = express.Router();
const foodService = require("../services/food.service");

/** GET */
router.get("/", async (req, res) => {
  const querys = ({
    search = null,
    order = "name",
    direction = "ASC",
    pagination = true,
    limit = 10,
    offset = 0,
    category = null,
  } = req.query);

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
