const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator')
const  validator = require('../services/validators/category.validator');
const categoryService = require('../services/category.service');

/** GET */
router.get('/',validator, async (req, res) => {
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
    offset = 0
  } = req.query);

  const categories = await categoryService.get(querys);
  res.send(categories);
});

/** POST */
router.post('/', validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const category = await categoryService.createOrUpdate(req.body);
  res.send(category);
});

/** PUT */
router.put('/:id', validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const category = await categoryService.createOrUpdate(req.body);
  res.send(category);
});

/** DELETE */
router.delete('/:id', validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  res.send(await categoryService.del(req.params.id));
});

module.exports = router;