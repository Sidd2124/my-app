import { useContext, useState } from "react";
import Chart from '../Context/Context';

import './CartItems.css'

const ChartItem = (props) => {
  const { RemoveItem } = useContext(Chart);
  

  const { ChartDetails } = props;
  const { Title, ProductLogo, Price, Rating, Brand, Id } = ChartDetails;
 

  const RemoveChartItem = () => {
    RemoveItem(Id);
  };

 

  return (
    <div key={Id} className="product-item">
      <h1>{Brand}</h1>
      <img src={ProductLogo} alt="Product Logo" className="product-logo" />
      <h3>{Title}</h3>
      <p className="price">MRP {Price}₹</p>
      <p className="rating">Rating: {Rating}⭐</p>
      <p>Total: {Price}₹</p>
      <button onClick={RemoveChartItem} className="remove-button">
        Remove From Chart
      </button>
    </div>
  );
};

export default ChartItem;
