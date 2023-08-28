const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator')
const validator = require('../services/validators/offer.validator');
const offerService = require('../services/offer.service');

/** GET */
router.get('/',  async (req, res) => {
  const querys = ({
    search, 
    order = "name",
    direction = "ASC",
    pagination = true,
    limit = 10,
    offset = 0
  } = req.query);

  const offers = await offerService.get(querys);
  res.send(offers);
});

/** POST */
router.post('/', validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const offer = await offerService.createOrUpdate(req.body);
  res.send(offer);
});

/** PUT */
router.put('/:id', validator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array });
  }
  const offer = await offerService.createOrUpdate(req.body);
  res.send(offer);
});

/** DELETE */
router.delete('/:id', async (req, res) => {
  res.send(await offerService.del(req.params.id));
});

module.exports = router;