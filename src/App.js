import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loginpage from './page/Loginpage';
import SignupPage from './page/SignupPage';
import Table from './page/Table';
import User from './Context/user.Context'
const App = () => {
  const [data, setData] = useState('')
  return (
    <>
      <BrowserRouter>
        <User.Provider value={ { data, setData } }>
          <Routes>
            <Route path='/' element={ <SignupPage /> } />;
            <Route path='Loginpage' element={ <Loginpage /> } />;
            <Route path='Table' element={ <Table /> } />;
          </Routes>
        </User.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
