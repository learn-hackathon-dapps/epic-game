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
  let txn;
  let returnedTokenUri;

  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");
  // Get the value of the NFT's URI
  returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI", returnedTokenUri);

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");
  // Get the value of the NFT's URI
  returnedTokenUri = await gameContract.tokenURI(2);
  console.log("Token URI", returnedTokenUri);

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");
  // Get the value of the NFT's URI
  returnedTokenUri = await gameContract.tokenURI(3);
  console.log("Token URI", returnedTokenUri);

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #4");
  // Get the value of the NFT's URI
  returnedTokenUri = await gameContract.tokenURI(4);
  console.log("Token URI", returnedTokenUri);

  console.log("Done deploying and minting.");
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