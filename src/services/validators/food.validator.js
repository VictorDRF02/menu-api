const { body } = require('express-validator');
const db = require('./../../models');

const validator = [
  body('name')
    .trim()
    .notEmpty()
    .isLength({ max: 255 })
    .withMessage('The name is required and must be less than 255 characters')
    .custom(async (name, { req }) => {
      const food = await db.Food.findOne({ where: { name: name } });
      if (food && food.id !== req.body.id) {
        throw new Error('The name is unique');
      }
      return true;
    }),
  body('amount')
    .trim()
    .notEmpty()
    .isLength({ max: 255 })
    .custom((amount) => {
      const amountAux = amount.split(' ');
      if (
        amountAux.length == 2 &&
        !isNaN(amountAux[0]) &&
        ['kg', 'g', 'ml', 'l'].includes(amountAux[1].toLowerCase())
      ) {
        return true;
      }
      throw new Error('Amount must by kg, g, L or ml');
    }),
  body('price').trim().notEmpty().isNumeric(),
  body('picture').trim().notEmpty().isLength({ max: 255 }).isURL(),
  body('categoryId').trim().notEmpty().isNumeric(),
];

module.exports = validator;