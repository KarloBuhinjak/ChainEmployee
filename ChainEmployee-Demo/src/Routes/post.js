const { Router } = require("express");
const router = Router();
const { ethers } = require("hardhat");
const {
  abi,
} = require("../../artifacts/contracts/DailyTaskContract.sol/DailyTaskContract.json");

const provider = new ethers.providers.JsonRpcProvider(process.env.API_URL);
const contractInstance = new ethers.Contract(
  process.env.DAILY_TASK_CONTRACT_ADRESS,
  abi,
  provider
);

const Project = require("../Models/Project");

router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/api/v1/auth/userlogin");
  }
});

router.get("/taskList", async (req, res) => {
  const user = req.session.user;

  try {
    var tasks;
    const projects = await Project.find({ isDeployed: false });
    if (user.isAdmin) {
      tasks = await contractInstance.getAllTasks();
    } else {
      tasks = await contractInstance.getTasksByEmployee(
        user.firstName,
        user.lastName
      );
    }
    res.render("index", { tasks, user, projects, searchParameter: null });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
});

router.get("/employeeTasks/:firstName/:lastName", async (req, res) => {
  const user = req.session.user;
  const firstName = req.params.firstName;
  const lastName = req.params.lastName;

  try {
    var tasks;

    tasks = await contractInstance.getTasksByEmployee(firstName, lastName);
    res.render("employeeView", { tasks, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
});

router.get("/projectTasks", async (req, res) => {
  const user = req.session.user;
  const projectName = req.query.projectName;

  try {
    var tasks = await contractInstance.getTasksByProject(projectName);
    res.render("projectTasks", { tasks, user, searchParameter: null });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
});

// router.post("/taskSearch", async (req, res) => {
//   const user = req.session.user;
//   const searchParameter = req.body.search;

//   try {
//     const projects = await Project.find();
//     var tasks = await contractInstance.getTasksByProjectName(searchParameter);
//     res.render("index", { tasks, user, projects, searchParameter: null });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to fetch tasks" });
//   }
// });

module.exports = router;
