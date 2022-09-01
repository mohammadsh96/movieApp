import React from 'react';
import { BrowserRouter as Router ,Route , Switch } from 'react-router-dom';
import "./App.scss";
import Home from './components/home/home';
import PageNotFound from './components/PageNotFound/pagenotfound';
import MovieDetails from './components/movieDetails/movieDetails'
import Header from './components/header/header'
import Footer  from './components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="app">
      <Router>
      <Header></Header>
      <div className="container">
      <Switch>

<Route path="/" exact component={Home} />
<Route path="/movie/:imdbID" component={MovieDetails} />
<Route component={PageNotFound}/>
      </Switch>
      </div>
 <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

