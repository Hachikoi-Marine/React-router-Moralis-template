# Table of contents
- [Table of contents](#table-of-contents)
  - [How to use moralis](#how-to-use-moralis)
  - [Dependencies](#dependencies)
  - [Removed dependencies](#removed-dependencies)
  - [Contract interactions](#contract-interactions)
    - [no params](#no-params)
    - [whit params](#whit-params)
    - [msg.value](#msgvalue)


## How to use moralis
- https://docs.moralis.io/moralis-dapp/web3/web3#executefunction

## Dependencies
- npm i @walletconnect/web3-provider magic-sdk moralis react-moralis
- Moralis stuff
  - @walletconnect/web3-provider
  - magic-sdk
  - moralis
  - react-moralis
- React-Router stuff
  -  react-router

## Removed dependencies
npm uninstall antd crypto-browserify https-browserify os-browserify web-vitals web3uikit

- antd - ui stuff
- crypto-browserify - some crypto stuff lik decrypt etc
- https-browserify - similar to axios
- os-browserify - os module to navigate files, but on-browser
- web-vitals - measure metricts and performance testing
- web3uikit - pretty cool web3 stuff, but don't needed, `bootstrap of web3`


## Contract interactions
### no params
```jsx
const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xAcb69A95a280276795F2191A469da2881b70813d",
      functionName: "readMessage",
    });
```

### whit params
```jsx
const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xAcb69A95a280276795F2191A469da2881b70813d",
      functionName: "store",
      params: {
        _favoriteNumber: 42,
      },
    });
```

### msg.value
```jsx
const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "",
      functionName: "mint",
      msgValue: Moralis.Units.ETH(0.1),
    });
```
