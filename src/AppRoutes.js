import React from 'react';
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';
import Login from './components/auth/login/login';
import Register from './components/auth/register/register';
import Header from './components/common/header/header';
import { Error } from './components/common/error/error';
import Sidebar from './components/common/sidebar/sidebar';
import { ProductForm } from './components/product/productForm/productForm';


const fullWidth = {
    width: '100%'
}


const Home = ()=> <h2 className="text-center">Home component</h2>

const DashBoard = () => <h2 className ="text-center">DashBoard component</h2>

const ProtectedRoute = ({component:Component,...props}) => (
    <>
        <Route {...props} render = {(props)=>(
            localStorage.getItem('token')
                ? <>
                    <Sidebar></Sidebar>
                    <div style={fullWidth} id = "content">
                    <Header isLoggedIn={true}></Header>
                    <Component {...props}></Component>
                    </div>
                </>
                : <Redirect to="/login"></Redirect>
        )}>
        </Route>
    </>
)   


const PublicRoute = ({component:Component,...props}) => (
    <>
        <Route {...props} render = {(props)=>(
            <>
                <Sidebar></Sidebar>
                <div style={fullWidth} id = "content">
                <Header isLoggedIn={localStorage.getItem('token')?true:false}></Header>
                <Component {...props}></Component>
                </div>
            </>
        )}>
        </Route>
    </>
) 

export const AppRoutes = ()=>{
    return (
        <Router>
            <Switch> 
                <PublicRoute exact path = "/" component={Home}></PublicRoute>
                <PublicRoute exact path ="/login" component={Login}></PublicRoute>
                <PublicRoute exact path="/register" component={Register}></PublicRoute>
                <ProtectedRoute exact path= "/dashboard" component={DashBoard}></ProtectedRoute>
                <ProtectedRoute exact path= "/add-product" component={ProductForm}></ProtectedRoute>
                <PublicRoute component={Error}></PublicRoute>
            </Switch>
        </Router>
    )
}
    