
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import CountriesJSON from './countries.json';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

function App() {

  return (
    <div className="container">
      <div className="row">

      <Navbar />

        <div className="col-5">
        <div className="list-group">

        <CountriesList />

        </div>
        </div>
    
      <Switch>
      
      <Route exact path='/:alpha3Code' component={CountryDetails} />

      </Switch>

      </div>
    </div>
  );
}

export default App;
