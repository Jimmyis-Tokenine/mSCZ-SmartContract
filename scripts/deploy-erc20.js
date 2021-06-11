const artifact = "ERC20";
const token = {
  name: "MSCZ",
  symbol: "MSCZ-DEV"
  
};

async function main() {
  // We get the contract to deploy
  const contract = await ethers.getContractFactory(artifact);
  const deploy = await contract.deploy(token.name, token.symbol);

  console.log(`Deployed ${artifact} to:`, deploy.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });