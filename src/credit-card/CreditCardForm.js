import React, { useState } from 'react'
import { Inputbox, Ptag } from './Creditcard.styled';

function CreditCardForm({data,setData}) {
    const [formData, setFormData] = useState({});

    const handleAppend = (e) => {
        const key_name = e.target.name;
        setFormData({...formData,[key_name]:e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ ...data, ...formData });
    }
  return (
      <div style={{ width: "45%", color: "rgb(116, 35, 116)" }}>
          <h2>Card Details</h2>
          <form onSubmit={handleSubmit}>
              <div>
                  <Ptag>Card Holder Name</Ptag>
                  <div>
                      <Inputbox style={{width:'70%'}} type="text" name='cardHolderName' onChange={handleAppend}/>
                  </div>
              </div>
              <div>
                  <Ptag>Card Number</Ptag>
                  <div>
                      <Inputbox style={{ width: '70%' }} type="number" name='cardNumber' onChange={handleAppend}/>
                  </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", width: "73%"}}>
                  <div>
                      <Ptag>Expiry Month</Ptag>
                      <Inputbox style={{ width: '45px' }} type="number" name='month' onChange={handleAppend}/>
                  </div>
                  <div>
                      <Ptag>Expiry Year</Ptag>
                      <Inputbox style={{ width: '70px' }} type="number" name='year' onChange={handleAppend}/>
                  </div>
                  <div>
                      <Ptag>CVV</Ptag>
                      <Inputbox style={{ width: '50px' }} type="number" name='cvv' onChange={handleAppend} />
                  </div>
              </div>
              <div style={{ display: "flex", margin: "18px", justifyContent: "center" }}> <button id='paybtn' type="submit">Submit</button></div>
          </form>
      </div>
  )
}

export default CreditCardForm