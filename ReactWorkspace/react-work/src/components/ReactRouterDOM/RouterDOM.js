import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../LazyLoading/Home';
import About from '../LazyLoading/About';
import Contact from '../LazyLoading/Contact';
import NotFound from '../LazyLoading/NotFound';
import './RouterDOM.css';

function RouterDOM() {
    return (
        <>
            <nav className='nav-bar'>
                <Link to='/'>Home</Link>
                <div><Link to='/about'>About</Link>&nbsp;<Link to='/about/insideAbout'>Inside About</Link></div>
                <Link to='/contact'>Contact</Link>
            </nav>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/about/insideAbout' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}

export default RouterDOM