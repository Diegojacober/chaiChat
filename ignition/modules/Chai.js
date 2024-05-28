const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("ChaiModule", (m) => {
  // const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const Chai = m.contract("chai", [], {}); // fetching bytecode and ABI

  console.log(Chai)
  return { chai: Chai };
});
