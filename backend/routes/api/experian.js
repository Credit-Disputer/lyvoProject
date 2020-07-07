const router = require("express").Router();
const Experian = require("../../models/Experian");

// router.route("/").get((req, res) => {
//   Experian.find()
//     .then(Experians => res.json(Experians))
//     .catch(err => res.status(400).json("Error: " + err));
// });

router.route("/").post((req, res) => {
    const { cr_number, creditor_name, generated_date, inquiries } = req.body;

  const newExperian = new Experian({
    cr_number,
    creditor_name,
    generated_date,
    inquiries,
  });

  newExperian.save()
  .then(() => res.json("Experian added!"))
  .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Experian.findById(req.params.id)
    .then(Experian => res.json(Experian))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Experian.findByIdAndDelete(req.params.id)
    .then(() => res.json("Experian deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

// update Experian by id
router.route("/update/:id").post((req, res, next) => {
    Experian.findByIdAndUpdate(
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
            console.log("Experian information updated!");
          }
        }
      );
});

module.exports = router;