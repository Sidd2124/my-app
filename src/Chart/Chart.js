import { useContext } from "react";
import ChartItem from '../ChartItems/ChartItems';
import Chart from '../Context/Context';

import {Link} from 'react-router-dom'

import Header from '../Header/Header';

import { FaShopify } from "react-icons/fa";


import AddressDetails from '../Adress/Adress'


import "./Cart.css"

const MyChart = (props) => {
  const { ChartValue,Orders } = useContext(Chart);
  
  

  const Amount = ChartValue.map((each) => each.Price);
  const FinelAmount = Amount.length === 0 ? 0 : Amount.reduce((A, B) => A + B);

  const handleSubmit = ()=>{
    
      var options = {
        key: "rzp_test_juufusxwk4a9jj",
        key_secret:"ejXOtYG7NpnIoEztcocR",
        amount: 1 *100,
        currency:"INR",
        name:"Sidd Store",
        description:"Thank you for Shop",
        handler: function(){
          alert("PayMent Succefull ");
          const{history}=props
          history.push("./Shop")
          Orders(ChartValue)
        },
        prefill: {
          name:"Sidd",
          email:"siddhumsd@gmail.com",
          contact:"9347877159"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
   
  }

  return (
   
    <div>
      {ChartValue.length === 0 ? (
        <><h1> Your Cart is Empty.....Tap to👇Shop</h1><Link to="/Shop"><FaShopify className="logout-btn" /></Link></>
      ) : (
        <div>
          <Header/>
          <h1>Cart</h1>
          <AddressDetails/>
        <div className="CartItems">
          {ChartValue.map((each,index) => (
            <ChartItem key={index} ChartDetails={each} />
          ))}
          
          
         
        </div>
        <button className="amount-button" onClick={handleSubmit}>
     Tap to Pay {FinelAmount}/- ₹
    </button>
        </div>
        
      )}
    </div>
  );
};

export default MyChart;
