import { fromPairs } from 'lodash'
import React from 'react'
import { Component } from 'react'
import {Route,Redirect} from 'react-router-dom'

export default ({component: Component,auth, ...rest})  => (
    <Route 
    {...rest}
   render = {props => {
     return   auth ? <Redirect to='/sign-in' /> : <Component {...props}/>
   }}
    />
)