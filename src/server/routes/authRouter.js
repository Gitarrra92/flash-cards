const router = require("express").Router();

router.get("/");

router.post("/login");

router.post("/register", async (req, res) => {
  try {
    const { email, password, firstName } = req.body;
    console.log("body", req.body);

    //validation
    if (!email || !password) {
      return res.status(400).json({ msg: "not all fields have been entered" });

      const existingUser = await User.find({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ msg: "Account with that email already exists" });
      }
      if (!firstName) firstName = email;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
