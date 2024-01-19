const { Router } = require("express");
const router = Router();
const Employee = require("../Models/User");

router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/api/v1/auth/userlogin");
  }
});

router.get("/", async (req, res) => {
  try {
    const user = req.session.user;

    const employees = await Employee.find();

    res.render("employees", { user, employees });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch employee list" });
  }
});
router.get("/create", async (req, res) => {
  try {
    const user = req.session.user;

    res.render("createEmployee", { user });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});
module.exports = router;
