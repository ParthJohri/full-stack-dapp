import {useState,useEffect} from 'react'
import {ethers} from 'ethers'
import Memo from './components/Memos'
import Buy from './components/Buy'
import chai from "./chai.png"
import abi from "./contractJson/chai.json"
import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not Connected')
  useEffect(()=>{
    const template=async()=>{
      try{const contractAddress="0x61E3CBcBD8E7f422cD2C98948c698bbe8207E9Cc";
      const contractABI=abi.abi;
      // Metamask part
      // 1. In order to transactions on goerli testnet
      // 2. Metamask consists of infura API which actually helps in connecting to the blockchain
      const {ethereum}=window;
      const account = await ethereum.request({
        method:"eth_requestAccounts"
      })
      window.ethereum.on("accountsChanged",()=>{
        window.location.reload()
      })
      setAccount(account);
      const provider = new ethers.BrowserProvider(window.ethereum); //read the Blockchain
      // It will prompt user for account connections if it isnt connected
      const signer = await provider.getSigner(); //write the blockchain
      const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
      )
      setState({provider,signer,contract});
    }
    catch(error){
      alert(error)
    }
  }
    template()
  },[])
  return (
    <>
     <div >
      <img src={chai} className="img-fluid" alt=".." width="100%" height="25%"/>
      <p style={{ marginTop: "10px", marginLeft: "5px" }}>
        <small>Connected Account - {account}</small>
      </p>
    
        <Buy state={state} />
        <Memo state={state} />
    
    </div>
    </>
  )
}

export default App