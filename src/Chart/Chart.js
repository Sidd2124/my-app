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
        <div>
          <h3>Refund Polocy</h3>
          <p>
We want you to be satisfied with your purchase. If you're not completely happy, we're here to help.
</p>
<h3>Refunds</h3>
<p>We offer a 3-days money-back guarantee on all our products. If you're not satisfied with your purchase for any reason, you may return it for a full refund within 3 days of the purchase date.

To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging</p>
<h3>Refund Process</h3>
<ul>
  <li>Contact us at tsiddu805@gmail.com/9347877159 to initiate the refund process</li>
  <li>Our customer support team will provide you with further instructions on returning the item</li>
  <li>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</li>
  <li>If your refund is approved, it will be processed, and a credit will automatically be applied to your credit card or original method of payment within  3 days</li>
</ul>
<h3>Exchanges</h3>
<p>If you need to exchange an item for a different one, please contact us at tsiddu805@gmail.com/9347877159. You will be responsible for any price difference and shipping costs associated with the exchange.</p>
        <h3>Non-Refundable Items</h3>
        <p>Certain items are non-refundable, including:</p>
        <ul>
          <li>Digital downloads</li>
          <li>Gift cards</li>
        </ul>
        <h3>Contact Us</h3>
            <p>f you have any questions about our refund policy, please contact us at tsiddu805@gmail.com/9347877159  .</p>
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
