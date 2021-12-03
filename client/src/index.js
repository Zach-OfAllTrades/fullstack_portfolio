import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./resources/style.css"
import PortfolioSPA from './portfolio-spa';
import {Helmet} from "react-helmet";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <Helmet>
    <title>Zachary Rose</title>
    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet" />
  </Helmet>
  <BrowserRouter>      
    <PortfolioSPA />
  </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);