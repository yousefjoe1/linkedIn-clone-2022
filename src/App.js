import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dach from './components/DachBoard/Dach/Dach';
import NetWork from './components/DachBoard/NetWorkPage/NetWork';
import UserHome from './components/DachBoard/UserHome/UserHome';
import Home from './components/Home/Home';
import Join from './components/Join/Join'
import Signin from './components/Signin/Signin'

function App() {
  

  return (
    <div className='app'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dachboard" element={<Dach />} >
          <Route path='home' element={<UserHome />} />
          <Route path='network' element={<NetWork />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
