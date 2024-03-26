const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator')
const validator = require('../services/validators/order.validator');
const orderService = require('../services/order.service');

/** GET */
router.get('/', async (req, res) => {
  const querys = {};
  querys.search = req.query.search;
  querys.order = req.query.order || 'name';
  querys.direction = req.query.direction || 'ASC';
  querys.pagination = req.query.pagination != 'false';
  querys.limit = req.query.limit || 10;
  querys.offset = req.query.offset || 0;

  const orders = await orderService.get(querys);
  res.send(orders);
});

/** POST */
router.post('/', validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const order = await orderService.createOrUpdate(req.body);
  res.send(order);
});

/** PUT */
router.put('/:id', validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const order = await orderService.createOrUpdate(req.body);
  res.send(order);
});

/** DELETE */
router.delete('/:id', async (req, res) => {
  res.send(await orderService.del(req.params.id));
});

module.exports = router;