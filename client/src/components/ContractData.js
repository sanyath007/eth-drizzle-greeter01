import React, { useEffect, useState } from 'react'

export default function ContractData({ drizzle, drizzleState }) {
  const [greeting, setGreeting] = useState(0);

  useEffect(() => {
    console.log(drizzle);

    const contract = drizzle.contracts.Greeter;
    console.log(contract);

    const res = contract.methods.get().call().then(res => {
      setGreeting(res)
    });
  });

  return (
    <div className="alert alert-primary m-2 mt-3" role="alert">
        <h4>Greeting : </h4>
        <p>{ greeting }</p>
    </div>
  )
}
