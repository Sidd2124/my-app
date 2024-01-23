
import { useState,useEffect } from "react"

import Header from '../Header/Header';

import "./PrimeDeals.css"

import ShopingItems from '../ShopingItems.js/ShopingItems'

import Cookies from 'js-cookie'; 
const PrimeDeals=()=>{
    const [Info,SetInfo]=useState([])

    useEffect(
        ()=>{
            PrimeDeals()
        }
    )

    const PrimeDeals=async()=>{
        const apiUrl = 'https://apis.ccbp.in/prime-deals'
        const SKS = Cookies.get('Value');
        const options={
         
            headers:{
               
                Authorization: `Bearer ${SKS}`,
            },method:"GET"
        }

        const Response=await fetch(apiUrl,options)
        const Update =await Response.json()


const PrimeProducts=Update.prime_deals.map((each)=>({
    Availability:each.availability,
    Brand:each.brand,
    Description:each.description,
    ProductLogo:each.image_url,
    Price:each.price,
    Rating:each.rating,
    Style:each.style,      
    Title:each.title,
    NumberOfReviews:each.total_reviews
}))



SetInfo(PrimeProducts)
    }
    return(
        <div className="Main">
            <Header/>
            <h1>PrimeDeals</h1>
<div className="shopping-item">
                 {Info.map((each) => <ShopingItems key={each.id} Details={each} />)}
                 </div>
        </div>
    )
}

export default PrimeDeals