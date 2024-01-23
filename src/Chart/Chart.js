import { useContext } from "react";
import ChartItem from '../ChartItems/ChartItems';
import Chart from '../Context/Context';

import {Link} from 'react-router-dom'

import Header from '../Header/Header';

import { FaShopify } from "react-icons/fa";


import "./Cart.css"

const MyChart = () => {
  const { ChartValue } = useContext(Chart);
  
  console.log(ChartValue);

  const Amount = ChartValue.map((each) => each.Price);
  const FinelAmount = Amount.length === 0 ? 0 : Amount.reduce((A, B) => A + B);

  

  return (
   
    <div>
      {ChartValue.length === 0 ? (
        <><h1> Your Cart is Empty.....Tap to👇</h1><Link to="/Shop"><FaShopify className="logout-btn" /></Link></>
      ) : (
        <div>
          <Header/>
          <h1>Cart</h1>
        <div className="CartItems">
          {ChartValue.map((each) => (
            <ChartItem key={each.id} ChartDetails={each} />
          ))}
          
          
         
        </div>
        <button className="amount-button">
     Tap to Pay {FinelAmount}/- ₹
    </button>
        </div>
        
      )}
    </div>
  );
};

export default MyChart;
