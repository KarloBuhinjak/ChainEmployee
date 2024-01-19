const { Router } = require("express");
const router = Router();
const { ethers } = require("hardhat");
const {
  abi,
} = require("../../artifacts/contracts/TeamChatContract.sol/TeamChatContract.json");

const provider = new ethers.providers.JsonRpcProvider(process.env.API_URL);
const contractInstance = new ethers.Contract(
  process.env.TEAM_CHAT_CONTRACT_ADRESS,
  abi,
  provider
);

router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/api/v1/auth/userlogin");
  }
});

router.get("/", async (req, res) => {
  const user = req.session.user;
  try {
    var messages;
    messages = await contractInstance.getMessages();

    res.render("chat", { messages, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});
module.exports = router;
