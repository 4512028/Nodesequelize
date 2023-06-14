var db = require("../models");
var Contant = db.contant;

var addcontant = async (req, res) => {
  const item = await Contant.build({
    parmanent_address: "59 jb ",
    currnet_address: "same ",
  });
  await item.save();
  res.status(200).json(item.toJSON());
};

module.exports = adduser;
