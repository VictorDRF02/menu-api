const express = require("express");
const router = express.Router();
const offerService = require('../services/offer.service');

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

  const offers = await offerService.get(querys);
  res.send(offers);
});

/** POST */
router.post('/', async (req, res) => {
  const offer = await offerService.createOrUpdate(req.body);
  res.send(offer);
});

/** PUT */
router.put('/:id', async (req, res) => {
  const offer = await offerService.createOrUpdate(req.body);
  res.send(offer);
});

/** DELETE */
router.delete('/:id', async (req, res) => {
  res.send(await offerService.del(req.params.id));
});

module.exports = router;