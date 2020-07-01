const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const multer = require("multer");
const auth = require("../../middleware/auth");
// Get User Model
const User = require("../../models/User");

// Endpoint for getting the active user object
router.route("/").get(auth, (req, res) => {
  User.findById(req.user.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   POST api/user
// @desc    Test route
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // Create new user
      user = new User({
        name,
        email,
        password
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      // Create a hash and save it as the user password
      user.password = await bcrypt.hash(password, salt);
      // Save the user
      await user.save();

      // Return jsonwebtoken for when user registers for auth
      // and access protected routes
      const payload = {
        user: {
          id: user.id
        }
      };

      // Sign token
      jwt.sign(
        payload,
        process.env.JWT_TOKEN, // get secret token
        { expiresIn: 36000 }, // 3600 = 1 hour
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// delete user with id
router.route("/delete-user/:id").delete((req, res, next) => {
  User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

// update user with id
router.route("/update-user/:id").put((req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("User information updated!");
      }
    }
  );
});

// update active user
router.route("/update-user").put(auth, (req, res, next) => {
  User.findByIdAndUpdate(
    req.user.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        res.status(400).json("Error: " + error);
      } else {
        res.json(data);
      }
    }
  );
});

module.exports = router;
