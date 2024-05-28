import { useEffect, useState } from 'react'
import './App.css'
// import abi from "./constractJson/chai.js";
import { ethers } from 'hardhat'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('Not connected');

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x93fE8D332E6262b5EF5F635b50cd57B90926162f";
      const contractABI = "abi.abi";
      // Metamask part
      // 1. In order do transactions on goerli testnet
      // 2. Metamask consists of infura api which actually help in connection to the blockchain

      try {
        const { ethereum } = window;

        const account = await ethereum.request({
          method: "eth_requestAccounts"
        })
        setAccount(account);

        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )

        setState({
          provider,
          signer,
          contract
        })
        console.log(contract)
      } catch (error) {
        alert(error)
      }
    }

    template()
  }, [])

  return (
    <>

    </>
  )
}

export default App
