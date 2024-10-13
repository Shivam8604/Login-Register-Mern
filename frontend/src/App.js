import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register';
import Login from './Login';

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
