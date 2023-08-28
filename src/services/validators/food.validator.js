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
      let amountAux;
      
      if(amount.slice(-1) === 'g' && amount.slice(-2) !== 'kg'){
        amountAux = amount.slice(-1);
      } else { amountAux = amount.slice(-2); }
  
      if (
        amount.length > 2 &&
        !isNaN(amount.slice(0, -2)) &&
        ['kg', 'g', 'ml', 'l'].includes(amountAux.toLowerCase())
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