import Cookies from 'js-cookie';
import { withRouter, Link } from 'react-router-dom';
import './Header.css'; 

import { IoIosLogOut } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import { IoHomeOutline } from "react-icons/io5";

const Header = (props) => {
  const Logout = () => {
    const { history } = props;
    Cookies.remove("Value");
    history.push('/');
  };

  return (
    <nav className="header-nav">
      <div>
        <Link to="/Shop">
        <IoHomeOutline className="logout-btn"/>

        </Link>
      </div>
      <div>
      <button className="logout-btn" onClick={Logout}><IoIosLogOut/></button>
      <Link to="./Chart" className="chart-link">
        <button className="chart-btn"><FaCartShopping/></button>
      </Link>
      </div>
    </nav>
  );
};

export default withRouter(Header);
