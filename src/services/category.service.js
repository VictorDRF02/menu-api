const model = "Category";
const db = require("./../models");
const Op = db.Sequelize.Op;

/**
 * Get the categories
 * @param {string} querys.search - String to search
 * @param {string} querys.order - Property to sort by
 * @param {string} querys.direction - Direction of the order (asc or desc) 
 * @param {boolean} querys.pagination - Boolean to paginate
 * @param {number} querys.limit - Limit of categories per page
 * @param {number} querys.offset - Number of categories to skip
 * @returns All the categories
 */
async function get() {
  const categories = await db[model].findAndCountAll({
    where: {
      [Op.and]: [
        search && {
          [Op.or]: [
            {name: {[Op.iLike]: '%'+ search +'%'}}
          ]
        }
      ],
    },
    raw: true,
    limit: pagination && limit,
    offset: pagination && offset,
    order: [[order, direction]]
  });
  return categories;
}

/**
 * Create or update the category
 * @param {Object} body - Contains name and id
 * @param {number} body.id - Id of the category to be updated
 * @param {string} body.name - Name of the category
 * @returns The category created or updated
 * @throws {Error} If the id not exist in the data base throws a error
 */
async function createOrUpdate(body) {
  let category;
  if (!body.id) {
    category = await db[model].create({
      name: body.name,
    });
  } else {
    category = await db[model].findByPk(body.id);
    if (!category) {
      throw new Error(`Category with ID ${body.id} not found.`);
    }
    await category.update({
      name: body.name,
    });
  }
  return category;
}

/**
 * Delete a category by id
 * @param {number} id - Id of the category to be delete 
 * @returns A menssage
 * @throws {Error} - Throws a error if the id is not in the data base
 */
async function del(id) {
  const category = await db[model].findByPk(id);
  if (!category) {
    throw new Error(`Category with ID ${id} not found.`)
  }

  await db['Food'].destroy({ where: { categoryId: id } });
  await category.destroy();
  return `The category ${id} has beean delete.`;
}
module.exports = { get, createOrUpdate, del};