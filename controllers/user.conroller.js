var db = require("../models");
var User = db.user;
var Contant = db.contact;

var adduser = async (req, res) => {
  const item = await User.build({ firstName: "umer", lastName: "saleem" });
  await item.save();
  res.status(200).json(item.toJSON());
};

var getUsers = async (req, res) => {
  const item = await User.findAll();
  res.status(200).json(item);
};
var getUser = async (req, res) => {
  const item = await User.findOne({ where: { id: req.params.id } });
  res.status(200).json(item);
};
var postUser = async (req, res) => {
  var body = req.body;
  const item = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
  });
  res.status(200).json(item);
};
var deleteUser = async (req, res) => {
  const item = await User.destroy({ where: { id: req.params.id } });
  res.status(200).json(item);
};

var patchUser = async (req, res) => {
  let body = req.body;
  const item = await User.update(
    {
      firstName: body.firstName,
    },
    { where: { id: req.params.id } }
  );
  res.status(200).json(item);
};

var oneToOne = async (req, res) => {
  //   const item = await User.create({ firstName: "umer", lastName: "saleem" });
  //   if (item.id) {
  //     await Contant.create({
  //       parmanent_address: "59 jb ",
  //       currnet_address: "same ",
  //       user_id: item.id,
  //     });
  //   }
  const item = await User.findAll({
    attributes: ["firstName", "lastName"],
    include: [
      {
        model: Contant,
        attributes: ["parmanent_address", "currnet_address"],
      },
    ],
  });
  res.status(200).json(item);
};
module.exports = {
  adduser,
  getUsers,
  getUser,
  postUser,
  deleteUser,
  patchUser,
  oneToOne,
};
