import React, { useContext } from 'react';
import Chart from '../Context/Context';
import "./ShopinItems.css";



const ShopingItems = (props) => {
  const {Details}=props
  const { Title, ProductLogo, Price, Rating, Brand, Id } = Details;

  const { NewChart } = useContext(Chart);

  const AddtoChart = () => {
    NewChart(Details);
   alert("Item Added to Cart Succesfully")
  };
  if (!Details) {
    console.error("Products prop is undefined or null:", props);
    return <div>No products available</div>;
  }

  
  return (
    <div key={Id} className='product-container'>
      
      <h1>{Brand}</h1>
      <img src={ProductLogo} alt="Product Logo" className="product-logo" />
      <h3>{Title}</h3>
      <p className="price">MRP {Price}₹</p>
      <p className="rating">Rating: {Rating}⭐</p>
      <button className="add-to-cart" onClick={AddtoChart}>Add To Cart</button>
      
    </div>
  );
};

export default ShopingItems;
