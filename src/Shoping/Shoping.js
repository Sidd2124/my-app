import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Redirect, Link } from 'react-router-dom';
import Header from '../Header/Header';
import { PacmanLoader } from 'react-spinners';
import ShopingItems from '../ShopingItems.js/ShopingItems';

import SlideItems from '../Slide Items/SlideItems'
import './Shoping.css';

const sortbyOptions = [
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
];

class Shoping extends Component {
  constructor() {
    super();
    this.state = {
      TotalProducts: [],
      SortingValue: 'PRICE_LOW',
      IsLoading: true,
      Counting:0
    };
  }

  componentDidMount() {
    this.ShowProducts();
    setInterval(()=>{
      const {Counting,TotalProducts}=this.state
      const Random=Math.floor(Math.random()*TotalProducts.length)
      this.setState({Counting:Random})
      if(Counting===54){
this.setState({Counting:0})
      }
    },2000)
  }

  componentDidUpdate(_, prevState) {
    if (prevState.SortingValue !== this.state.SortingValue) {
      this.ShowProducts();
    }
  }

  ShowProducts = async () => {
    const { SortingValue } = this.state;
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${SortingValue}`;
    const SKS = Cookies.get('Value');
    const options = {
      headers: {
        Authorization: `Bearer ${SKS}`,
      },
      method: 'GET',
    };

    const response = await fetch(apiUrl, options);
    const update = await response.json();

    const ProductsList = update.products.map((each) => ({
      Title: each.title,
      ProductLogo: each.image_url,
      Price: each.price,
      Rating: each.rating,
      Brand: each.brand,
      Id: each.id,
    }));

    this.setState({
      TotalProducts: ProductsList,
      IsLoading: false,
    });

   
  };

  handleSortChange = (event) => {
    this.setState(
      {
        SortingValue: event.target.value,
      },
      () => this.ShowProducts()
    );
  };

  render() {
    const { TotalProducts, IsLoading,Counting } = this.state;
    
    
    const SKS = Cookies.get('Value');

    

    if (SKS === undefined) {
      console.log('Redirecting to the home page...');
      return <Redirect to="/" />;
    }

    return (

      <div className="container">
        <div className="products-container"></div>
        <Header />
        {IsLoading ? (
          <div className="Loading">
            <h1>Products On the way..</h1>
            <PacmanLoader color="#FFA500" />
          </div>
        ) : (
          <div>
            
            <div className='Sort'>
              
              <select className="sort-select" onChange={this.handleSortChange}>
                {sortbyOptions.map((eachOption) => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
<Link to="/Orders">
              <button> Your Orders</button>
              </Link>
<div className='Privacy'>             <Link to="/Refund">
             <button>
              Refund Policy& Terms And Conditions
             </button>
             </Link>
             <Link to="/Privacypolicy">
             <button>
             Privacypolicy
             </button>
             </Link>
             </div>

            </div>
            <div className="TopSlider">
            <SlideItems  ItemsInfo={TotalProducts[Counting]}/>

            </div>
            <br/>
            <Link to="/PrimeDeals">
              <button className="link-btn">Tap me For Prime Deals's</button>
            </Link>
            <div  className="shopping-item">
            {TotalProducts.map((each) => (
             
                <ShopingItems key={each.id} Details={each} />
              
            ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Shoping;
