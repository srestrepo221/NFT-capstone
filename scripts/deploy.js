// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const PRICE = ethers.utils.parseUnits('0.025', 'ether')

  // Deploy mint contract
  const Mint = await hre.ethers.getContractFactory('Mint')
  let mint = await Mint.deploy('GreenBros', 'GB', PRICE)

  await mint.deployed()
  console.log(`mint deployed to: ${mint.address}\n `)
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
