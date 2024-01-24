import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Login from './Login/Login';
import Shoping from '../src/Shoping/Shoping';
import MyChart from '../src/Chart/Chart';
import PrimeDeals from './PrimeDeals/PrimeDeals';
import Chart from '../src/Context/Context';

class App extends Component {
  state = { UpdatedChart: [] };

  FinelUpdate = (J) => {
    this.setState(prevState => ({ UpdatedChart: [...prevState.UpdatedChart, J] }));
  };

  ChartUpdating = (K) => {
    const { UpdatedChart } = this.state;
    const Result = UpdatedChart.filter((each) => each.Id !== K);
    this.setState({ UpdatedChart: Result });
  };

  render() {
    const { UpdatedChart } = this.state;

    return (
      <Chart.Provider value={{ ChartValue: UpdatedChart, NewChart: this.FinelUpdate, RemoveItem: this.ChartUpdating }}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Shop" component={Shoping} />
              <Route exact path="/PrimeDeals" component={PrimeDeals} />
              <Route exact path="/Chart" component={MyChart} />
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
