
import { Root } from 'postcss'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Career from '../pages/Career'
import Roots from '../Root/Roots'
import Resigter from '../Resigter/Resigter'
import Login from '../Login/Login'
import PrivateNews from '../PriveteNews/PrivateNews'
import PrivateRoute from '../PrivateRout/PrivateRoute'

 const router = createBrowserRouter([
    {
        path: '/',
        element : <Roots />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/about',
                element : <About />
            },
            {
                path : '/career',
                element : <Career />
            },
            {
                path : '/resigter',
                element : <Resigter />
            },
            {
                path : '/login',
                element : <Login />
            },
            {
                path : '/privatenews/:_id',
                element :  <PrivateRoute><PrivateNews /></PrivateRoute>,
                loader : () => fetch('/news.json')
                
            },
        ]
    }
 ])
export default router;