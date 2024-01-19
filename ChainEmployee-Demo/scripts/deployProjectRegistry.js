async function main() {
  const ProjectRegistry = await ethers.getContractFactory(
    "ProjectRegistryContract"
  );

  // Start deployment, returning a promise that resolves to a contract object
  const ProjectRegistry_ = await ProjectRegistry.deploy();
  console.log("Contract address:", ProjectRegistry_.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
