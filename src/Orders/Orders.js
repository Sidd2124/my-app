import React, { useContext, useEffect, useState } from 'react';
import Chart from '../Context/Context';
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import './Orders.css';

import Header from '../Header/Header'

const Orders = () => {
  const { OrderedItems } = useContext(Chart);
  const [locatOrders, setLocatOrders] = useState([]);

  useEffect(() => {
    // Update local storage when OrderedItems change
    localStorage.setItem("Orders", JSON.stringify(OrderedItems));

    // Retrieve data from local storage
    const storedOrders = JSON.parse(localStorage.getItem('Orders') || '[]');
    console.log(storedOrders)
    setLocatOrders(storedOrders);
  }, [OrderedItems]);

  const DeliveryDate = `${new Date().getDate() + 2}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;

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
    <div>
      <div></div>
      {locatOrders.length === 0 ? (
        <h1>
          No Orders yet 🥲, We are Holding Something Exciting to Deliver You... Tap to Shop 👉
          <Link to="/Shop">
            <FaShopify className="logout-btn" />
          </Link>
        </h1>
      ) : (
        <div>
          <Header />
          <h1>Your Orders</h1>
          <div className='Order'>
            {locatOrders.map((each) => <OrderItem OrdersInfo={each} />)}
          </div>
          <h4>Order at Your Door Step By <span>{DeliveryDate}</span> and Thank you for Choosing Sidd Store for More Info check your Mail</h4>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Orders;
