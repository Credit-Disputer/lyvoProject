const router = require("express").Router();
const Equifax = require("../../models/Equifax");

// router.route("/").get((req, res) => {
//   Equifax.find()
//     .then(Equifaxs => res.json(Equifaxs))
//     .catch(err => res.status(400).json("Error: " + err));
// });

router.route("/").post((req, res) => {
    const { cr_number, creditor_name, generated_date, inquiries } = req.body;

  const newEquifax = new Equifax({
    cr_number,
    creditor_name,
    generated_date,
    inquiries,
  });

  newEquifax.save()
  .then(() => res.json("Equifax added!"))
  .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Equifax.findById(req.params.id)
    .then(Equifax => res.json(Equifax))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Equifax.findByIdAndDelete(req.params.id)
    .then(() => res.json("Equifax deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

// update equifax by id
router.route("/update/:id").post((req, res, next) => {
    Equifax.findByIdAndUpdate(
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
            console.log("Equifax information updated!");
          }
        }
      );
});

module.exports = router;