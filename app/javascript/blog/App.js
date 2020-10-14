import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Service';
import Products from './pages/Products/Products';
import Signup from './pages/Signup/signup';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
   <Router>   
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />  
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={Signup} />

      </Switch> 
      <Footer />
   </Router>
  );
}

export default App;
