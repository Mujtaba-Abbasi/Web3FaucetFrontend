import './App.css'
import React, { useEffect } from 'react';
import web3 from 'web3'

function App() {

  useEffect(() => {
    const loadProvider = async () => {
      window.ethereum ? {

      }
        : window.web3 ? {

        }
          : !process.env.production && {

          }
    }

    loadProvider();
  }, [])

  const enableEth = async () => {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
    console.log(accounts);
  }


  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="balance-view is-size-2">
            Current Balance: <strong>10</strong> ETH
          </div>
          <button className="btn mr-2 " onClick={enableEth}>Enable Ehereum</button>
          <button className="btn mr-2 ">Donate</button>
          <button className="btn" >Withdraw</button>
        </div>
      </div>
    </>
  )
}

export default App

      // * with metamask we have access to the window.ethereum & to window.web3
      // * metamask injects a global API into our website
      // * this allows websites to request users, accounts, read data to the blockchain
      // * sign messages and transactions