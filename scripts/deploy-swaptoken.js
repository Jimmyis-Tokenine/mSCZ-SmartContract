const artifact = "SwapToken";
const token = {
  A: {
    name: "BUSD",
    address: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
    // address: "0x3b1F033dD955f3BE8649Cc9825A2e3E194765a3F",
  },
  B: {
    name: "mSCZ-DEV",
    address: "0xeca43dfbb748bbd8bc54031c4a98e339a1a368e6",
  }
};

async function main() {
  // We get the contract to deploy
  const contract = await ethers.getContractFactory(artifact);
  const deploy = await contract.deploy(token.A.name, token.A.address, token.B.name, token.B.address);

  console.log(`Deployed ${artifact} to:`, deploy.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });