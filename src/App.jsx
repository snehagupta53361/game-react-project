import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/videos';
import Upload from './components/Upload';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={'/videos'} element={<Videos/>}/>
            <Route path={'/upload'} element={<Upload/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/signUp'} element={<SignUp/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App