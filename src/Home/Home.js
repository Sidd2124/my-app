import Cookies from 'js-cookie'; 



import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Home = (props) => {
 
  
  

  const SKS = Cookies.get('Value');
  if (SKS===undefined ) {
    console.log('Redirecting to the home page...');
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Siddu @ Reactjs Developer</h1>
   
   <Link to="/Shop">Shopping</Link>
    </div>
  );
};

export default Home;
