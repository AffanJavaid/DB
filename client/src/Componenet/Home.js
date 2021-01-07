import Navbar from './Navbar'
import React, {Component} from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Organization from './Organization'
import Client from './Client'
import Employee from './Employee'
import Subdivision from './Subdivision'
import Account from './Account'

const Home = () => {
  return (
      <BrowserRouter>
        <div className="container">
          <Navbar/>
          <h1 className="center">Bank</h1>
          <Route path ='/Organization' component={Organization} />
          <Route path ='/Client' component={Client} />
          <Route path ='/Employee' component={Employee} />
          <Route path ='/Subdivision' component={Subdivision} />  
          <Route path ='/Account' component={Account} />  
        </div>
      </BrowserRouter>
  )
}

export default Home;