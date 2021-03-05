async function main() {
  // We get the contract to deploy

  const Token = await ethers.getContractFactory("KtzToken");
  const token = await Token.deploy();

  // console.log(token);
  console.log("Token deployed to:", token.address);

  const MasterChef = await ethers.getContractFactory("MasterChef")
  const masterChef = await MasterChef.deploy(token.address, "0xF3317B0CA333676985BB4330662C17BDA168b3D8", "0xF3317B0CA333676985BB4330662C17BDA168b3D8", 100000);

  console.log("MasterChef deployed to:", masterChef.address);

  await hre.run("verify:verify", {
  address: contractAddress,
  constructorArguments: [
    50,
    "a string argument",
    {
      x: 10,
      y: 5,
    },
    "0xabcdef",
  ],
})

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
