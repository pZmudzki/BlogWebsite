const Admin = require("../models/adminSchema");
const jwt = require("jsonwebtoken");
const { comparePasswords, hashPassword } = require("../utils/auth");

// if needed, allows to create more admins

// const register = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const hashedPassword = await hashPassword(password);
//     const user = await Admin.create({ email: email, password: hashedPassword });
//     res.json(user);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Nie podano adresu email" });
    }

    if (!password) {
      return res.status(400).json({ error: "Nie podano hasła" });
    }

    const acc = await Admin.findOne({ email: email });
    if (!acc) {
      return res.status(401).json({ error: "Niewłaściwy login lub hasło" });
    }

    const isMatch = await comparePasswords(password, acc.password);
    if (isMatch) {
      jwt.sign(
        {
          email: acc.email,
        },
        process.env.JWT_SECRET,
        (err, token) => {
          if (err) throw err;
          res
            .cookie("token", token, {
              httpOnly: true,
              secure: true,
              sameSite: false,
            })
            .status(200)
            .json({ admin: acc.email });
        }
      );
    } else {
      return res.status(401).json({ error: "Niewłaściwy login lub hasło" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: error.message });
  }
};

const logout = (req, res) => {
  try {
    res
      .clearCookie("token")
      .status(200)
      .json({ admin: null, message: "Wylogowano" });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};
module.exports = {
  login,
  logout,
  // register,
};
