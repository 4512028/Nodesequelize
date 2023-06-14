const { Sequelize, Model, DataTypes } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("test", "invozone", "1234", {
  host: "localhost",
  dialect:
    "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

let db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(Sequelize, sequelize, DataTypes);
db.contact = require("./contact")(Sequelize, sequelize, DataTypes);

db.user.hasOne(db.contact, {
  foreignKey: "user_id",
});
db.contact.belongsTo(db.user);

db.sequelize.sync({ force: false });
module.exports = db;
