const User = require("../models/user");
//signin
exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB"
      });
    }
    req.profile = user;
    next();
  });
};
//getting user details
exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    return res.json(req.profile);
  };

//updating the user
exports.updateUser = (req,res) => {
  User.findByIdAndUpdate(
    {_id : req.profile._id},
    {$set: req.body},
    {new: true, useFindAndModify: false},
    (err, user) => {
      if(err || !user){
        return res.status(400).json({
          error: "You are not authorized to update this user"
        })
      }
      user.salt = undefined;
      user.encry_password = undefined;
      res.json(user)
    }
  )
}
//optional
  exports.getAllUsers = (req,res) => {
    User.find().exec((err, users) => {
      if(err || !users){
        return res.status(400).json({
          error: "No User Found"
        });
      }
      res.json(users);
    });
  };