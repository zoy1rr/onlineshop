import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Products from './pages/products/Products'
import Register from './pages/register/Register'
import Notfound from './pages/Notfound'
import Biz from './pages/biz/Biz'
Biz

function Root() {
    return (
        <div>

            <BrowserRouter>
                <Routes >
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/biz' element={<Biz></Biz>}></Route>
                    <Route path='*' element={<Notfound />}></Route>
                </Routes>
            </BrowserRouter>

        </div >
    )
}

export default Root
