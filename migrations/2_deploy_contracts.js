const config = require("../truffle-config");
const WHTToken = artifacts.require('WHTToken');
const UniswapV2Factory = artifacts.require('UniswapV2Factory');
const UniswapV2Router01 = artifacts.require('UniswapV2Router01');
const UniswapV2Router02 = artifacts.require('UniswapV2Router02');
const Multicall = artifacts.require('Multicall');

module.exports = async (deployer, network, accounts) => {

  // await deployer.deploy(Multicall);
  // await deployer.deploy(WHTToken);
  await deployer.deploy(UniswapV2Factory, '0x4cf0a877e906dead748a41ae7da8c220e4247d9e');

  const uniswapV2Factory = await UniswapV2Factory.deployed();
  const Factory = uniswapV2Factory.address;

  // // const mul = await Multicall.deployed();
  // // const mulAddr = mul.address;

  // // const testnetWwan = '0x916283cc60fdaf05069796466af164876e35d21f';
  // // const mainnetWwan = '0xdabd997ae5e4799be47d6e69d9431615cba28f48';
  // // const WWan = mainnetWwan;
  await deployer.deploy(UniswapV2Router02, Factory, '0x1eD3538383BBFDB80343B18F85D6c5A5Fb232fb6');

  return;

  // console.log(`...network = ${network}`)
  // global.network = network;
  // const [owner, admin, other] = accounts;
  // const networkConfig = config.networks[network]

  // // deploy wwan
  // await deployer.deploy(WwanToken);
  // const wwan = await WwanToken.deployed();
  // console.log("wwan: " + wwan.address);

  // // deploy factory
  // let feeAccount = other;
  // if (networkConfig && networkConfig.feeToSetter) {
  //   feeAccount = networkConfig.feeToSetter
  // }
  // console.log(`feeAccount = ${feeAccount}`)
  // await deployer.deploy(UniswapV2Factory, feeAccount);
  // const uniswapV2Factory = await UniswapV2Factory.deployed();
  // console.log(`uniswapV2Factory = ${uniswapV2Factory.address}`)

  // const WWan = wwan.address;
  // const Factory = uniswapV2Factory.address;

  // // deploy router
  // await deployer.deploy(UniswapV2Router01, Factory, WWan);
  // const uniswapV2Routor01 = await UniswapV2Router01.deployed();
  // console.log(`UniswapV2Router01 = ${uniswapV2Routor01.address}`)

  // // deploy router 2
  // await deployer.deploy(UniswapV2Router02, Factory, WWan);
  // const uniswapV2Routor02 = await UniswapV2Router02.deployed();
  // console.log(`UniswapV2Router02 = ${uniswapV2Routor02.address}`)
};
