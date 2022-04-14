const db = require('../models/bookModels.js');

const userController = {};

userController.createUser = async (req, res, next) => {
  const { first_name, last_name, email, username, password } = req.body;
  const dynamicQueryUser = 'INSERT INTO "user_table" (username, password, first_name, last_name, email) VALUES ($1, $2, $3, $4, $5);';

  try {
    await db.query(dynamicQueryUser, [first_name, last_name, email, username, password]);

    next();
  } catch (err) {
    next({
      log: `Error creating user: ${err}`,
      message: 'Error creating user in database - see database logs for more information'
    })
  }

};

module.exports = userController;