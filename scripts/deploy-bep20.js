const { BigNumber } = require("ethers");

const t = `${16000000 * (10 ** 18)}`

const artifact = "BEP20Token";
const token = {
  name: "mSCZ",
  symbol: "MSCZ-DEV",
  decimals: 18,
  totalSupply: BigNumber.from("1600000000000000000000000"),
};

async function main() {
  // We get the contract to deploy
  const contract = await ethers.getContractFactory(artifact);
  const deploy = await contract.deploy(token.name, token.symbol, token.totalSupply);

  console.log(`Deployed ${artifact} to:`, deploy.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });