const hre = require("hardhat");

async function main() {
  console.log("Deploying CopyrightRegistry contract to Celo...");

  const CopyrightRegistry = await hre.ethers.getContractFactory("CopyrightRegistry");
  const registry = await CopyrightRegistry.deploy();

  await registry.waitForDeployment();

  const address = await registry.getAddress();
  console.log("CopyrightRegistry deployed to Celo address:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
