var express = require("express");
var router = express.Router();
const multer = require("../middleware/multerSingle")

const UserControllers = require("../controllers/userControllers");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//localhost:3000/users/register
router.post("/register", UserControllers.register);

//localhost:3000/users/login

router.post("/login", UserControllers.login);

//localhost:3000/users/getOneUser/:id

router.get("/getOneUser/:id", UserControllers.getOneUser);

//localhost:3000/users/editUser/

router.put("/editUser", multer("users"), UserControllers.edit);

module.exports = router;
