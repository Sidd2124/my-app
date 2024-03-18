import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect,  } from 'react-router-dom';
import Login from './Login/Login';
import Shoping from '../src/Shoping/Shoping';
import MyChart from '../src/Chart/Chart';
import PrimeDeals from './PrimeDeals/PrimeDeals';
import Chart from '../src/Context/Context';
import Orders from '../src/Orders/Orders'
import Refund from './RefundPolicy/Refund'

class App extends Component {
  state = { UpdatedChart: [],NewOrders:[] };

  FinelUpdate = (J) => {
    this.setState(prevState => ({ UpdatedChart: [...prevState.UpdatedChart, J] }));
  };

  ChartUpdating = (K) => {
    const { UpdatedChart } = this.state;
    const Result = UpdatedChart.filter((each) => each.Id !== K);
    this.setState({ UpdatedChart: Result });
  };
  AddingOrders=(Add)=>{
this.setState({NewOrders:Add,UpdatedChart:[ ]})
  }

  render() {
    const { UpdatedChart,NewOrders } = this.state;
    console.log(NewOrders)

    return (
      <Chart.Provider value={{ ChartValue: UpdatedChart, NewChart: this.FinelUpdate, RemoveItem: this.ChartUpdating,OrderedItems:NewOrders,Orders:this.AddingOrders }}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Shop" component={Shoping} />
              <Route exact path="/PrimeDeals" component={PrimeDeals} />
              <Route exact path="/Chart" component={MyChart} />
              <Route exact path="/Orders" component={Orders}/>
              <Route exact path="/Refund" component={Refund}/>
              <Route
                exact
                path="/NothingtoFound"
                component={() => (
                  <div>
                    <h1>NothingTo Found</h1>
                  
                  </div>
                )}
              />
              <Redirect to="/NothingtoFound" />
            </Switch>
          </div>
        </BrowserRouter>
      </Chart.Provider>
    );
  }
}

export default App;
