const router = require("express").Router();
const Transunion = require("../../models/Transunion");

// router.route("/").get((req, res) => {
//   Transunion.find()
//     .then(Transunions => res.json(Transunions))
//     .catch(err => res.status(400).json("Error: " + err));
// });

router.route("/").post((req, res) => {
    const { cr_number, creditor_name, generated_date, inquiries } = req.body;

  const newTransunion = new Transunion({
    cr_number,
    creditor_name,
    generated_date,
    inquiries,
  });

  newTransunion.save()
  .then(() => res.json("Transunion added!"))
  .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Transunion.findById(req.params.id)
    .then(Transunion => res.json(Transunion))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Transunion.findByIdAndDelete(req.params.id)
    .then(() => res.json("Transunion deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

// update Transunion by id
router.route("/update/:id").post((req, res, next) => {
    Transunion.findByIdAndUpdate(
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
            console.log("Transunion information updated!");
          }
        }
      );
});

module.exports = router;