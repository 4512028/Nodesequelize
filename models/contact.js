const { INTEGER } = require("sequelize");

module.exports = (Sequelize, sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      // Model attributes are defined here
      parmanent_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      currnet_address: {
        type: DataTypes.STRING,
        allowNull: false,

        // allowNull defaults to true
      },
      user_id: DataTypes.INTEGER,
    },
    {
      // Other model options go here
      tableName: "contacts",
    }
  );

  // `sequelize.define` also returns the model
  console.log(Contact === sequelize.models.Contact); // true
  return Contact;
};
