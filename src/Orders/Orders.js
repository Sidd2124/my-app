
import Header from '../Header/Header'
import { useContext } from 'react';
import Chart from '../Context/Context';

import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";

import './Orders.css';

const Orders = () => {
  const { OrderedItems } = useContext(Chart);
 localStorage.setItem("Orders",OrderedItems)
 

  const OrderItem = (props) => {
    const { OrdersInfo } = props;
    const { Title, ProductLogo, Brand, Id } = OrdersInfo;

    return (
      <div key={Id} className="product-item">
        <h1>{Brand}</h1>
        <img src={ProductLogo} alt="Product Logo" className="product-logo" />
        <h3>{Title}</h3>
       
      </div>
    );
  };

  return (
    <div >
        <div></div>
      {OrderedItems.length === 0 ?<h1>
  No Orders yet 🥲, We are Holding Something Exciting to Deliver You... Tap to Shop 👉
  <Link to="/Shop">
    <FaShopify className="logout-btn" />
  </Link>
</h1>
 :    <div>
        <Header/>
        <h1>Your Orders</h1>
        <div className='Order'>
        {OrderedItems.map((each) => <OrderItem OrdersInfo={each} />)}
      
        </div>   <h4>Order at Your Door Step In Couple of Day's and Thank you for Choosing Sidd Store for More Info check your mail</h4></div>}
     
      <div></div>
    </div>
  );
};

export default Orders;
