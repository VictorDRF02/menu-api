const express = require("express");
const router = express.Router();
const categoryService = require('../services/category.service');

/** GET */
router.get('/', async (req, res) => {
  const querys = ({
    search,
    order = "name",
    direction = "ASC",
    pagination = true,
    limit = 10,
    offset = 0
  } = req.query);

  const categories = await categoryService.get(querys);
  res.send(categories);
});

/** POST */
router.post('/', async (req, res) => {
  const category = await categoryService.createOrUpdate(req.body);
  res.send(category);
});

/** PUT */
router.put('/:id', async (req, res) => {
  const category = await categoryService.createOrUpdate(req.body);
  res.send(category);
});

/** DELETE */
router.delete('/:id', async (req, res) => {
  res.send(await categoryService.del(req.params.id));
});

module.exports = router;