async function main() {
  const TeamChat = await ethers.getContractFactory("TeamChatContract");

  // Start deployment, returning a promise that resolves to a contract object
  const TeamChat_ = await TeamChat.deploy();
  console.log("Contract address:", TeamChat_.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
