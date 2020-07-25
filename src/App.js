import React from 'react';
import './index.css';
import './App.css';
import {HashRouter,Route, Switch} from 'react-router-dom';
import Header from './component/header';
import Home from './pages/home/home';
import Project from './pages/project/project';
import Contact from './pages/contact/contact';
import ImageGalery from './pages/galery/imagegalery';
import Galery404 from './pages/galery/galery404';

class App extends React.Component{
  
  render(){
  return (
    <HashRouter basename='/'>
    <div className="App">
<Header />
<div >
<Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/project' component={Project}/>
		  <Route path='/contact' component={Contact}/>
    <Route path='/image-galery' component={ImageGalery}/>
    <Route path='/galery-in-progres' component={Galery404}/>
</Switch>
</div>
<footer>Made by <a href='https://marijanasatler.github.io/my-portfolio/' target='blanck'><img  className='mylogo' src={require('./images/mylogo.png')} alt='logo'/> </a> </footer>
    </div>
    </HashRouter>
  );
 }
}

export default App;