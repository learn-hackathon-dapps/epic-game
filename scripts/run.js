const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Simba", "ObiWan", "Cat"],       // Names
    ["https://i.imgur.com/p4OkgYH.png", // Images
    "https://i.imgur.com/QNVeh7E.png",
    "https://i.imgur.com/NUyttbn.png"],
    [100, 200, 300],                    // HP values
    [100, 50, 25]                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();