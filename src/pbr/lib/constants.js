import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000
export const START_REWARD_AT_BLOCK = 3525595 // TODO
export const NUMBER_BLOCKS_PER_YEAR = 2800000 // ~7500 block/day

export const START_NEW_POOL_AT = 1609255800 // 2020/12/29 22h30

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const ethereumNetwork = 'ethereum'
export const bscNetwork = 'bsc'
export const polygonNetwork = 'polygon'
export const harmonyNetwork = 'harmony'
export const moonriverNetwork = 'moonriver'

export const tokenIdMapping = {
  ethereum: 'ethereum',
  bsc: 'binancecoin',
  polygon: 'polygon',
  harmony: 'harmony',
  moonriver: 'moonriver',
}

// TODO: change the address & set LP pool
export const contractAddresses = {
  pbr: {
    1: '0x298d492e8c1d909d3f63bc4a36c66c64acb3d695', // pbr token
    42: '0x0d6ae2a429df13e44a07cd2969e085e4833f64a0',
  },
  masterLaunchpad: {
    1: '0x7Df76A64aE3dc2f818f969fe081ea52ab8cBC350',
    42: '0x221AcD0Cc5f31Aea65FacEC2343C804ce43CbD6d', // launchpad contract
  },
  weth: {
    1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    42: '0xd0a1e359811322d97991e03f863a0c30c2cf029c', // weth
  },
  launchpadBsc: {
    56: '0x95B4cC2217706b22D7dfe918FA1049aA34e19D1D',
    97: '0xADa1BC883B2681f476C0C7dF32d94E3c8f5bb930',
  },
  // launchpadHarmony: {
  //   1666700000: '',  //mainnet
  //   1666600000: '0xae8aaf92013dc8f7fa22fe01e56271c93b24058f'//testnet
  // }
}

const testing = false

export const currentConnection = testing ? 'testnet' : 'mainnet'

export const stakeContractAddresses = {
  ethereum: {
    1: '0x1b46b72c5280f30Fbe8A958B4f3c348FD0fD2E55',
    42: '0x7678f0AF7304e01554E2D49D96E55C8de4975c66',
  },
  polygon: {
    137: '0x6335aF028e77B574423733443678aD4cb9e15B3D',
    80001: '0x55950cF279Ba5b43263f4Df54833b85F684B333F',
  },
  harmony: {
    //todo:
  },
}

// access types
export const PUBLIC = 'Public'
export const PRIVATE = 'Private'
export const WHITELIST = 'Whitelist'
export const GUARANTEED = 'Guaranteed'

export const supportedPools = [
  {
    pid: 52,
    poolId: 1,
    lpAddresses: {
      1: '',
      42: '',
      56: '',
      97: '',
    },
    tokenAddresses: {
      1: '',
      42: '',
      56: '',
      97: '',
    },
    lpExplorer: 'https://bscscan.com/address',
    name: 'Test IGO',
    symbol: 'Test-CASHP',
    description: `TEST/BNB`,
    introduce: `Test IGO is a blockchain-based platform to provide an inclusive ecosystem through a multitude of services.`,
    website: 'https://google.com',
    twitter: 'https://google.com',
    telegram: 'https://google.com',
    whitepaper: 'https://google.com',
    tokenSymbol: 'TEST',
    tokenExplorer: 'https://bscscan.com/address',
    icon: '/img/tokens/byn.png',
    totalSupply: '100,000,000 TEST',
    price: 0.1,
    total: '166.6 BNB', // 1BNB = 600$, 100k$
    ratio: 10909, //0.055$
    min: 0.46, //300$
    max: 0.76, //500$
    maxTier1: 0.46, //300$
    maxTier2: 0.61, //400$
    maxTier3: 0.76, //500$
    access: GUARANTEED,
    network: bscNetwork,
    distribution: '20% TGE, 20% per month in next 4 months',
    startAt: 1658706599,
    endAt: 1658706599,
    claimAt: 0,
    startDate: 'TBA',
  },
  {
    pid: 51,
    poolId: 1,
    lpAddresses: {
      1: '',
      42: '',
      56: '',
      97: '',
    },
    tokenAddresses: {
      1: '',
      42: '',
      56: '',
      97: '',
    },
    lpExplorer: 'https://bscscan.com/address',
    name: 'Test IGO',
    symbol: 'Test-CASHP',
    description: `TEST/BNB`,
    introduce: `Test IGO is a blockchain-based platform to provide an inclusive ecosystem through a multitude of services.`,
    website: 'https://google.com',
    twitter: 'https://google.com',
    telegram: 'https://google.com',
    whitepaper: 'https://google.com',
    tokenSymbol: 'TEST',
    tokenExplorer: 'https://bscscan.com/address',
    icon: '/img/tokens/byn.png',
    totalSupply: '100,000,000 TEST',
    price: 0.1,
    total: '166.6 BNB', // 1BNB = 600$, 100k$
    ratio: 10909, //0.055$
    min: 0.46, //300$
    max: 0.76, //500$
    maxTier1: 0.46, //300$
    maxTier2: 0.61, //400$
    maxTier3: 0.76, //500$
    access: GUARANTEED,
    network: bscNetwork,
    distribution: '20% TGE, 20% per month in next 4 months',
    startAt: 1658706599,
    endAt: 1658706599,
    claimAt: 0,
    startDate: 'TBA',
  },
  {
    pid: 50,
    poolId: 1,
    lpAddresses: {
      1: '',
      42: '',
      56: '',
      97: '',
    },
    tokenAddresses: {
      1: '',
      42: '',
      56: '',
      97: '',
    },
    lpExplorer: 'https://bscscan.com/address',
    name: 'Test IGO',
    symbol: 'Test-CASHP',
    description: `TEST/BNB`,
    introduce: `Test IGO is a blockchain-based platform to provide an inclusive ecosystem through a multitude of services.`,
    website: 'https://google.com',
    twitter: 'https://google.com',
    telegram: 'https://google.com',
    whitepaper: 'https://google.com',
    tokenSymbol: 'TEST',
    tokenExplorer: 'https://bscscan.com/address',
    icon: '/img/tokens/byn.png',
    totalSupply: '100,000,000 TEST',
    price: 0.1,
    total: '166.6 BNB', // 1BNB = 600$, 100k$
    ratio: 10909, //0.055$
    min: 0.46, //300$
    max: 0.76, //500$
    maxTier1: 0.46, //300$
    maxTier2: 0.61, //400$
    maxTier3: 0.76, //500$
    access: GUARANTEED,
    network: bscNetwork,
    distribution: '20% TGE, 20% per month in next 4 months',
    startAt: 1658706599,
    endAt: 1658706599,
    claimAt: 0,
    startDate: 'TBA',
  },
 
  {
    pid: 1,
    lpAddresses: {
      1: '0x7Df76A64aE3dc2f818f969fe081ea52ab8cBC350',
      42: '0x221AcD0Cc5f31Aea65FacEC2343C804ce43CbD6d',
    },
    tokenAddresses: {
      1: '',
      42: '',
    },
    lpExplorer: 'https://etherscan.io/address',
    name: 'Shoefy',
    symbol: 'SHOE-CASHP',
    description: `SHOE/ETH`,
    introduce: `Shoefy - Contemporary way of repositioning the Non-Fungible Token (NFT) in an unprecedented method with the help of Fungible Tokens (FT`,
    website: 'https://google.com',
    twitter: 'https://google.com',
    telegram: 'https://google.com',
    whitepaper: 'https://google.com',
    tokenSymbol: 'SHOE',
    tokenExplorer: 'https://etherscan.io/token',
    icon: '/img/tokens/shoefy.png',
    totalSupply: '100,000,000 SHOE',
    total: '28.57 ETH', //1ETH =3k5$
    ratio: 8750, //1 SHOE 0.4$
    min: 0.142, //500$
    max: 0.2, //700$
    maxTier1: 0.142, //500$
    maxTier2: 0.171, //600$
    maxTier3: 0.2, //700$
    access: 'Private',
    network: ethereumNetwork,
    distribution: '50% TGE after 1h Uniswap listing, 50% next month',
    startAt: 1633960800, //real 1633960800
    endAt: 1633964400, //real 1633964400
    claimAt: 1634648400, //real 1634648400
    startDate: '2PM UTC 11th Oct',
    claimTimeArr: [1634648400, 1637280000],
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0x7Df76A64aE3dc2f818f969fe081ea52ab8cBC350',
      42: '0x221AcD0Cc5f31Aea65FacEC2343C804ce43CbD6d',
    },
    tokenAddresses: {
      1: '',
      42: '',
    },
    lpExplorer: 'https://etherscan.io/address',
    name: 'Shoefy',
    symbol: 'SHOE-CASHP',
    description: `SHOE/ETH`,
    introduce: `Shoefy - Contemporary way of repositioning the Non-Fungible Token (NFT) in an unprecedented method with the help of Fungible Tokens (FT`,
    website: 'https://google.com',
    twitter: 'https://google.com',
    telegram: 'https://google.com',
    whitepaper: 'https://google.com',
    tokenSymbol: 'SHOE',
    tokenExplorer: 'https://etherscan.io/token',
    icon: '/img/tokens/shoefy.png',
    totalSupply: '100,000,000 SHOE',
    total: '28.57 ETH', //1ETH =3k5$
    ratio: 8750, //1 SHOE 0.4$
    min: 0.142, //500$
    max: 0.2, //700$
    maxTier1: 0.142, //500$
    maxTier2: 0.171, //600$
    maxTier3: 0.2, //700$
    access: 'Private',
    network: ethereumNetwork,
    distribution: '50% TGE after 1h Uniswap listing, 50% next month',
    startAt: 1633960800, //real 1633960800
    endAt: 1633964400, //real 1633964400
    claimAt: 1634648400, //real 1634648400
    startDate: '2PM UTC 11th Oct',
    claimTimeArr: [1634648400, 1637280000],
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0x7Df76A64aE3dc2f818f969fe081ea52ab8cBC350',
      42: '0x221AcD0Cc5f31Aea65FacEC2343C804ce43CbD6d',
    },
    tokenAddresses: {
      1: '',
      42: '',
    },
    lpExplorer: 'https://etherscan.io/address',
    name: 'Shoefy',
    symbol: 'SHOE-CASHP',
    description: `SHOE/ETH`,
    introduce: `Shoefy - Contemporary way of repositioning the Non-Fungible Token (NFT) in an unprecedented method with the help of Fungible Tokens (FT`,
    website: 'https://google.com',
    twitter: 'https://google.com',
    telegram: 'https://google.com',
    whitepaper: 'https://google.com',
    tokenSymbol: 'SHOE',
    tokenExplorer: 'https://etherscan.io/token',
    icon: '/img/tokens/shoefy.png',
    totalSupply: '100,000,000 SHOE',
    total: '28.57 ETH', //1ETH =3k5$
    ratio: 8750, //1 SHOE 0.4$
    min: 0.142, //500$
    max: 0.2, //700$
    maxTier1: 0.142, //500$
    maxTier2: 0.171, //600$
    maxTier3: 0.2, //700$
    access: 'Private',
    network: ethereumNetwork,
    distribution: '50% TGE after 1h Uniswap listing, 50% next month',
    startAt: 1633960800, //real 1633960800
    endAt: 1633964400, //real 1633964400
    claimAt: 1634648400, //real 1634648400
    startDate: '2PM UTC 11th Oct',
    claimTimeArr: [1634648400, 1637280000],
  }
]
// given pid and network name -> launchpad pool id
export const getPoolId = (pid, network) => {
  const _pidIndex = supportedPools.findIndex(
    (item) => item.pid === pid && item.network === network,
  )
  if (_pidIndex === -1) {
    return 0
  }
  return supportedPools[_pidIndex].poolId
    ? supportedPools[_pidIndex].poolId
    : supportedPools[_pidIndex].pid
}

export const stakeAddressMatic = '0x6335aF028e77B574423733443678aD4cb9e15B3D'

export const HMY_TESTNET_RPC_URL = 'https://api.s0.b.hmny.io'
export const HMY_MAINNET_RPC_URL = 'https://api.harmony.one'

export const harmonyChainIds = {
  shard0: {
    mainnet: 1666600000,
    testnet: 1666700000,
  },
  shard1: {
    mainnet: 1666600001,
    testnet: 1666700001,
  },
  shard2: {
    mainnet: 1666600002,
    testnet: 1666700002,
  },
  shard3: {
    mainnet: 1666600003,
    testnet: 1666700003,
  },
}

export const bscChainIds = [56, 97]

export const tierConditions = {
  maxTier1: {
    min: 500,
    max: 1500,
  },
  maxTier2: {
    min: 1500,
    max: 3000,
  },
  maxTier3: {
    min: 3000,
  },
}
