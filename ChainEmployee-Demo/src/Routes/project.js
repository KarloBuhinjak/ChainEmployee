const { Router } = require("express");
const router = Router();
const Project = require("../Models/Project");

router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/api/v1/auth/userlogin");
  }
});

router.post("/create", async (req, res) => {
  try {
    const { projectName, deadline } = req.body;

    const newProject = new Project({
      projectName,
      deadline,
    });

    await newProject.save();
    res.redirect("/api/v1/project/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create project" });
  }
});

router.get("/", async (req, res) => {
  user = req.session.user;
  try {
    const projects = await Project.find({ isDeployed: false });
    res.render("projects", { projects, user, searchParameter: null });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

router.get("/getProject/:projectId", async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch project" });
  }
});

router.delete("/deleteProject/:projectId", async (req, res) => {
  try {
    const { projectId } = req.params;
    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete project" });
  }
});

router.post("/deploy", async (req, res) => {
  try {
    const { projectName } = req.body;

    const project = await Project.findOne({ projectName });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.isDeployed = !project.isDeployed;
    project.deployedAt = new Date();

    await project.save();

    const deployedProjects = await Project.find({ isDeployed: true });
    res.status(200).json({
      message: "Project updated successfully",
      projects: deployedProjects,
    });
  } catch (error) {
    console.error("Greška prilikom ažuriranja projekta:", error);
    res.status(500).json({ message: "Došlo je do greške." });
  }
});

router.get("/deployedProjects", async (req, res) => {
  user = req.session.user;

  try {
    const projects = await Project.find({ isDeployed: true });
    res.render("deployedProjects", { projects, user, searchParameter: null });
  } catch (error) {
    console.error("Greška prilikom ažuriranja projekta:", error);
    res.status(500).json({ message: "Došlo je do greške." });
  }
});

module.exports = router;
