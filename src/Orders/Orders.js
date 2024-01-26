import './Orders.css'

const Orders=(props)=>{
    const {OrdersInfo}=props
    const {Title, ProductLogo,  Brand, Id}=OrdersInfo
    return(
        <div key={Id} className="product-item">
        <h1>{Brand}</h1>
        <img src={ProductLogo} alt="Product Logo" className="product-logo" />
        <h3>{Title}</h3>
        
        
      </div>
    )
}

export default Orders