import AboutUsPage from '../AboutUs/Aboutus'
import './footer.css'
import {Link} from 'react-router-dom'

const Footer=()=>{

return(
    <div className="FooterTopLayer">
        <div className='LayerTwo'>
            <Link to="About">
            <h3>About US</h3>
        </Link>
        <Link to="/Contact">
        <h3>Contact US</h3>
        </Link>
        
        </div>
        <div className='LayerTwo'>
            <Link to="/Privacypolicy">
        <h3>PrivatePolicy</h3>
        </Link>
        <Link to="/TermsAndConditions">
        <h3>Terms And Conditions</h3>
        </Link>
        <Link to="/Refund">
        <h3>Cancellation/Refund Policies.</h3>
        </Link>
       
        </div>
       
    </div>

)
    
}

export default Footer