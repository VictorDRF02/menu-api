const express = require("express");
const router = express.Router();
const categoryService = require('../services/category.service');

/** GET */
router.get('/', async (req, res) => {
  const querys = {};
  querys.search = req.query.search;
  querys.order = req.query.order || 'name';
  querys.direction = req.query.direction || 'ASC';
  querys.pagination = req.query.pagination != 'false';
  querys.limit = req.query.limit || 10;
  querys.offset = req.query.offset || 0;

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