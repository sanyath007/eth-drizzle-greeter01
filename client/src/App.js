import React from 'react';
import { DrizzleContext } from "drizzle-react";
import Navbar from './components/Navbar';
import ContractForm from './components/ContractForm';
import ContractData from './components/ContractData';

function App() {
  return (
    <DrizzleContext.Consumer>
      {drizzleContext => {
        const { drizzle, drizzleState, initialized } = drizzleContext;
        const web3 = drizzle.web3;
        
        if(!initialized) {
          return "Loading...";
        }
        
        return (          
          <div className="app">
            <Navbar />
            
            <div className="card m-2 mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Your Account: </h4>
                    { drizzleState.accounts[0] }
                  </div>
                  <div className="col-md-6">
                    <h4>Your Balance: </h4>
                    { web3.utils.fromWei(drizzleState.accountBalances[drizzleState.accounts[0]], "ether") } ETH
                  </div>
                </div>
              </div>
            </div>
            

            <ContractForm drizzle={drizzle} drizzleState={drizzleState} />

            <ContractData drizzle={drizzle} drizzleState={drizzleState} />
          </div>          
        );
      }}
    </DrizzleContext.Consumer>
  );
}

export default App;
