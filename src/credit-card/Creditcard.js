import React from 'react'
import styled from './style.css';
import CardImg from "./imagedata/symbols02.png";
import chipImg from "./imagedata/chip.png";
import { Ptag } from './Creditcard.styled';

function Creditcard({data }) {
    const { cardHolderName, cardNumber, cvv, month, year } = data;
    console.log(data);
  return (
      <div id="cardDiv">
          <div id="Card">
              <div id="cardType">
                  <img src={CardImg} alt="card type" style={{ height: "35px", marginRight: "25px", }} />
              </div>
              <div style={{ paddingLeft: "30px", marginTop: "-5px" }}>
                  <img src={chipImg} alt="chip" style={{ height: "35px", }} />
              </div>
              <div style={{ paddingLeft: "22px", margin: "8px" }}>{cardNumber ? cardNumber :"XXXXXXXXXXXXXX"}</div>
              <div
                  style={{
                      paddingLeft: "22px",
                      paddingRight: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "-15px 12px",
                  }}
              >
              
              <div>
                      <Ptag>CARD HOLDER NAME</Ptag> <p>{cardHolderName ? cardHolderName:"Name"}</p>
              </div>
              <div>
                      <Ptag>Expiry</Ptag> <p>{month ? month :"XX "}/ { year ? year :"YY"}</p>
              </div>
              <div>
                  <Ptag>CVV</Ptag><p>{cvv ? cvv :"XXX"}</p>
              </div>
          </div>
          </div>
      </div>
  )
}

export default Creditcard