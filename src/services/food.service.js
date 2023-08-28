const model = "Food";
const db = require("./../models");
const Op = db.Sequelize.Op;

/**
 * Get the foods
 * @param {string} querys.search - String to search
 * @param {string} querys.order - Property to sort by
 * @param {string} querys.direction - Direction of the order (asc or desc) 
 * @param {boolean} querys.pagination - Boolean to paginate
 * @param {number} querys.limit - Limit of foods per page
 * @param {number} querys.offset - Number of foods to skip
 * @param {number} querys.category - Category
 * @returns The foods
 */
async function get(querys) {
  const foods = await db[model].findAndCountAll({
    where: {
      [Op.and]: [
        search && {
          [Op.or]: [
            {name: {[Op.iLike]: '%'+ search +'%'}},
            {amount: {[Op.iLike]: '%'+ search +'%'}}
          ]
        },
        category && {
          categoryId: category}
      ],
    },
    raw: true,
    limit: pagination && limit,
    offset: pagination && offset,
    order: [[order, direction]]
  });
  return foods;
}

/**
 * Create or update the food
 * @param {Object} body - Contains name, price, picture and categoryId
 * @param {number} body.id - Id of the food to be updated
 * @param {string} body.name - Name of the food
 * @param {string} body.amount - Amount of the food
 * @param {number} body.price - Price of the food
 * @param {string} body.picture - URL of the food picture
 * @param {number} body.categoryId - Category id
 * @returns The food created or updated
 * @throws {Error} If the id not exist in the data base throws a error
 */
async function createOrUpdate(body) {
  let food;
  if (!body.id) {
    food = await db[model].create({
      name: body.name,
      amount: body.amount,
      price: body.price,
      picture: body.picture,
      categoryId: body.categoryId,
    });
  } else {
    food = await db[model].findByPk(body.id);
    if (!food) {
      throw new Error(`Food with ID ${body.id} not found.`);
    }

    await food.update({
      name: body.name,
      amount: body.amount,
      price: body.price,
      picture: body.picture,
      categoryId: body.categoryId,
    });
  }
  return food;
}

/**
 * Delete a food by id
 * @param {number} id - Id of the food to be delete 
 * @returns A menssage
 * @throws {Error} - Throws a error if the id is not in the data base
 */
async function del(id) {
  const food = await db[model].findByPk(id);
  if (!food) {
    throw new Error(`Food with ID ${id} not found.`)
  }

  await food.destroy();
  return `The food ${id} has been deleted.`;
}

module.exports = { get, createOrUpdate, del };
