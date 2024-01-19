async function main() {
  const DailyTask = await ethers.getContractFactory("DailyTaskContract");

  // Start deployment, returning a promise that resolves to a contract object
  const DailyTask_ = await DailyTask.deploy();
  console.log("Contract address:", DailyTask_.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
