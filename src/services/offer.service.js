const model = "Offer";
const db = require("./../models");
const Op = db.Sequelize.Op;

/**
 * Get all the offers
 * @param {string} querys.search - String to search
 * @param {string} querys.order - Property to sort by
 * @param {string} querys.direction - Direction of the order (asc or desc) 
 * @param {boolean} querys.pagination - Boolean to paginate
 * @param {number} querys.limit - Limit of offers per page
 * @param {number} querys.offset - Number of offers to skip
 * @returns All the offers
 */
async function get() {
  const offer = await db[model].findAndCountAll({
    where: {
      [Op.and]: [
        search && {
          [Op.or]: [
            {name: {[Op.iLike]: '%'+ search +'%'}}
          ]
        }
      ],
    },
    limit: pagination && limit,
    offset: pagination && offset,
    order: [[order, direction]]
  });

  for (let i = 0; i < offer.rows.length; i++) {
    const categories = await offer.rows[i].getCategories();
    const food = await offer.rows[i].getFood();

    offer.rows[i] = offer.rows[i].toJSON();
    offer.rows[i].categories = categories;
    offer.rows[i].food = food;
  }

  return offer;
}

/**
 * Create or update the offer
 * @param {Object} body - Contains name, price, categories, foods and id
 * @param {number} body.id - Id of the offer to be updated
 * @param {string} body.name - Name of the offer
 * @param {number} body.price - Price of the offer
 * @param {number[]} body.categories - Categories that contains the offer
 * @param {number[]} body.foods - Foods that contains the offer
 * @returns The offer created or updated
 * @throws {Error} If the id not exist in the data base throws a error
 */
async function createOrUpdate(body) {
  let offer;
  if (!body.id) {
    offer = await db[model].create({
      name: body.name,
      price: body.price,
    });
  } else {
    offer = await db[model].findByPk(body.id);
    if (!offer) {
      throw new Error(`Offer with ID ${body.id} not found.`);
    }

    await offer.update({
      name: body.name,
      price: body.price,
    });
  }

  for (i of body.categories) {
    offer.setCategories(await db.Category.findByPk(i));
  }
  for (i of body.foods) {
    offer.setFood(await db.Food.findByPk(i));
  }
  return offer;
}

/**
 * Delete a offer by id
 * @param {number} id - Id of the offer to be delete 
 * @returns A menssage
 * @throws {Error} - Throws a error if the id is not in the data base
 */
async function del(id) {
  const offer = await db[model].findByPk(id);
  if (!offer) {
    throw new Error(`Offer with ID ${id} not found.`)
  }

  await offer.destroy();
  return `The offer ${id} has been deleted.`;
}

module.exports = { get, createOrUpdate, del };
