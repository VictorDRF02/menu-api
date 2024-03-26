const { body } = require('express-validator');
const db = require('./../../models');

const validator = [
  body('name')
    .trim()
    .notEmpty()
    .isLength({ max: 64 })
    .withMessage('The name is required and must be less than 64 characters')
    .custom(async (name, { req }) => {
      const user = await db.User.findOne({ where: { name: name } });
      if (user && user.id !== req.body.id) {
        throw new Error('The name is unique');
      }
      return true;
    }),
  body('password') 
    .trim()       
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Must be at least 8 chars long"),
];

module.exports = validator;