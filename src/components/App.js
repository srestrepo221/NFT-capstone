import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { ethers } from 'ethers'

//const ipfsClient = require('ipfs-http-client')
//const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

// Components
import Navigation from './Navigation';
import Loading from './Loading';
import Main from './Main';

// ABIs
import MINT_ABI from '../abis/Mint.json'

// config
import config from '../config.json';

function App() {
  const [provider, setProvider] = useState(null)
  const [mint, setMint] = useState(null)

  const [account, setAccount] = useState(null)
  const [cost, setCost] = useState(0)
  const [balance, setBalance] = useState(0)

  const [isLoading, setIsLoading] = useState(true)

  const loadBlockchainData = async () => {
    // Initiate provider
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)

    // Network ID
    const { chainId } = await provider.getNetwork()

    // Initiate contracts
    const mint = new ethers.Contract(config[31337].mint.address, MINT_ABI, provider)
    setMint(mint)
    
    // Fetch accounts
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)

    // Fetch cost
    setCost(await mint.cost())

    setIsLoading(false)
  }

  useEffect(() => {
    if (isLoading) {
      loadBlockchainData()
    }
  }, [isLoading]);

  return(
    <Container>
      <Navigation account={account} />
      <h1 className='my-4 text-center'>React Hardhat Template</h1>
      <Main/>
    </Container>
  )
}

export default App;
