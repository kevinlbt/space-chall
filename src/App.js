import React from 'react'
import Home from './component/home'
import Destination from './component/destination'
import Crew from './component/crew'
import Technology from './component/technology'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact  path='/' Component={Home}/>
          <Route exact  path='/destination' Component={Destination}/>
          <Route exact  path='/crew' Component={Crew}/>
          <Route exact  path='/technology' Component={Technology}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
