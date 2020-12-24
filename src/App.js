import React from 'react'
import './App.css';
import Navbar from './Components/UI/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Provider} from './Components/UI/Context'
import index from './Components/UI/index'
function App() {
  return (
    <Provider>
    <Router>
       <React.Fragment>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={index}/>
          </Switch>
       </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
