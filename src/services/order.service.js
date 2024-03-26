const model = "Order";
const db = require("../models");
const Op = db.Sequelize.Op;

/**
 * Get all the orders
 * @param {string} querys.search - String to search
 * @param {string} querys.order - Property to sort by
 * @param {string} querys.direction - Direction of the order (asc or desc) 
 * @param {boolean} querys.pagination - Boolean to paginate
 * @param {number} querys.limit - Limit of orders per page
 * @param {number} querys.offset - Number of orders to skip
 * @returns All the orders
 */
async function get(querys) {
  const { search, pagination, order, direction, limit, offset } = querys;
  const orders = await db[model].findAndCountAll({
    where: {
      [Op.and]: [
        search && {
          [Op.or]: [
            {name: {[Op.iLike]: '%'+ search +'%'}}
          ]
        }
      ],
    },
    limit: pagination ? limit : null,
    offset: pagination ? offset : null,
    order: [[order, direction]]
  });

  for (let i = 0; i < orders.rows.length; i++) {
    const categories = await orders.rows[i].getCategories();
    const food = await orders.rows[i].getFood();

    orders.rows[i] = order.rows[i].toJSON();
    orders.rows[i].categories = categories;
    orders.rows[i].food = food;
  }

  return order;
}

/**
 * Create or update the order
 * @param {Object} body - Contains name, price, categories, foods and id
 * @param {number} body.id - Id of the order to be updated
 * @param {string} body.name - Name of the order
 * @param {number} body.price - Price of the order
 * @param {number[]} body.categories - Categories that contains the order
 * @param {number[]} body.foods - Foods that contains the order
 * @returns The order created or updated
 * @throws {Error} If the id not exist in the data base throws a error
 */
async function createOrUpdate(body) {
  let order;
  if (!body.id) {
    order = await db[model].create({
      name: body.name,
      price: body.price,
    });
  } else {
    order = await db[model].findByPk(body.id);
    if (!order) {
      throw new Error(`Order with ID ${body.id} not found.`);
    }

    await order.update({
      name: body.name,
      price: body.price,
    });
  }

  let categories = [];
  for (i of body.categories) {
    categories.push(await db.Category.findByPk(i));
  }
  let foods = [];
  for (i of body.foods) {
    foods.push(await db.Food.findByPk(i));
  }
  order.setCategories(categories);
  order.setFood(foods);

  return order;
}

/**
 * Delete a order by id
 * @param {number} id - Id of the order to be delete 
 * @returns A menssage
 * @throws {Error} - Throws a error if the id is not in the data base
 */
async function del(id) {
  const order = await db[model].findByPk(id);
  if (!order) {
    throw new Error(`Order with ID ${id} not found.`)
  }

  await order.destroy();
  return `The order ${id} has been deleted.`;
}

module.exports = { get, createOrUpdate, del };
