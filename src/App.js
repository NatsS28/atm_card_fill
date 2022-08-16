import logo from './logo.svg';
import './App.css';
import Creditcard from './credit-card/Creditcard';
import CreditCardForm from './credit-card/CreditCardForm';
import { useState } from 'react';

function App() {
    const [data, setData] = useState({});
  return (
      <>
          <div className="App">
              <Creditcard data={data} setData={setData} />
              <CreditCardForm data={data} setData={setData}/>
          </div>
      </>
  );
}

export default App;
