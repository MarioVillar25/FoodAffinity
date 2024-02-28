const connection = require("../config/db");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

class UserControllers {
  register = (req, res) => {
    const { name, email, password } = req.body;

    let saltRounds = 8;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) {
          res.status(500).json(err);
        }

        let sql = `INSERT INTO user (name, email, password) VALUES ("${name}", "${email}", "${hash}")`;

        connection.query(sql, (error, result) => {
          error ? res.status(500).json(error) : res.status(200).json(result);
          console.log("result", result);
        });
      });
    });
  };

  login = (req, res) => {
    const { email, password } = req.body;
    console.log("req.body", req.body);

    let sql = `SELECT * FROM user WHERE email = "${email}" AND is_deleted = 0`;

    connection.query(sql, (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else if (!result || !result.length || result[0].is_deleted == 1) {
        res.status(401).json("Usuario no autorizado");
      } else {
        const hash = result[0].password;
        bcrypt.compare(password, hash, (errHash, response) => {
          if (errHash) {
            res.status(500).json(errHash);
          }
          if (response) {
            const token = jwt.sign(
              {
                user: {
                  id: result[0].user_id,
                },
              },

              process.env.SECRET,
              { expiresIn: "5d" }
            );

            res.status(200).json({token, user: result[0]});
          } else {
            res.status(401).json("Usuario no autoizado");
          }
        });
      }
    });
  };

  getOneUser = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM user WHERE user_id = ${id} AND is_deleted = 0`;

    connection.query(sql, (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result[0]);
      }
    });
  };

  edit = (req, res) => {

    console.log(req.body);



  }



}

module.exports = new UserControllers();
