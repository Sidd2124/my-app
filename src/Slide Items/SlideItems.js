import "./SlideItems.css"
import Chart from '../Context/Context';
import { useContext } from "react"
const SlideItems=(props)=>{
    const{ItemsInfo}=props
    const{Title, ProductLogo, Price, Rating, Brand, }=ItemsInfo
    const { NewChart } = useContext(Chart);
    const AddtoCharts=()=>{
        NewChart(ItemsInfo)
    }

    return(
        <div className="Timer">
            <div>
            <h1>{Title}</h1>
            <h4>{Brand}</h4>
           
      <p className="rating">Rating: {Rating}⭐</p>
      <p className="price">MRP {Price}₹</p>
      <button onClick={AddtoCharts} >Add To Cart</button>
            </div>
            <img src={ProductLogo} alt="Logo" className="ItemLogo"/>
        </div>
    )
}

export default SlideItems
 