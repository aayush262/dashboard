import React from 'react';
import {Link} from 'react-router-dom';
import httpClient from './../../../utils/httpClient';
import { notify } from '../../../utils/notify';
import './login.css'

class loginComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            usernameErr: '',
            passwordErr: '',
            isSubmitting: false,
            isValidForm: false,
            rememberMe: false 
        }
    }

    componentDidMount(){
        if(localStorage.getItem('token'))
            this.props.history.push('/dashboard');
    }

    handleChange = event =>{
        let {type,name,value,checked} = event.target;
        if(type==="checkbox"){
            value=checked;
            this.rememberMe(value);
        }
        this.setState((prevState)=>{
            return{
                [name]: value
            }
        },()=>{
            this.validateForm(name)
        })
    }

    rememberMe(value){
        localStorage.setItem('remember_me',value);
    }

    validateForm = fieldName => {
        let errMsg;
        switch (fieldName){
            case 'username':
                errMsg = this.state[fieldName]
                    ?''
                    :'username is required'
                break;
            case 'password':
                errMsg = this.state[fieldName]
                    ?''
                    :'password is required'
                break;
            default:
                break;
        }
        this.setState({
            [fieldName+'Err']: errMsg
        })
    }

    handleSubmit =event=>{
        event.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        this.setState(()=>({
            isSubmitting:true
        }),()=>{
            this.props.history.push('/dashboard');
        })
        // httpClient.post('/auth/login',data)
        //     .then(response=>{
        //         notify.showSuccess(`welcome ${response.data.user.name}`)
        //         localStorage.setItem('token',response.data.token);
        //         localStorage.setItem('user',JSON.stringify(response.data.user));
        //         this.props.history.push('/dashboard');
        //     })
        //     .catch(err=>{
        //         notify.handleErr(err)
        //         this.setState({
        //             isSubmitting: false
        //         })
                
        //     })
        //     .finally()

    }

    render(){
        let btn = this.state.isSubmitting?<button className="btn btn-primary" disabled={true}>Logging in</button>: <button type="submit" className="btn btn-primary">login</button>
        return(
            <div className ="container half">
                <h2>Login</h2>
                <p>Pls login to start your session</p>
                <form className ="form-group" onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="username" placeholder= "Username"></input>
                    <p className="text-danger">{this.state.usernameErr}</p> 
                    <label>password</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="password" placeholder= "********"></input>
                    <p className="text-danger">{this.state.passwordErr}</p>
                    <input onChange={this.handleChange} type="checkbox" name="rememberMe"></input>
                    <label>Remember Me</label>
                    <br></br>
                    {btn}    
                </form>
                <p>Don't have an account? Register 
                        <Link to="/register"> here.</Link>
                    </p>
                    <br></br>
                    <Link to="/forgot-password">forgot Password?</Link>
            </div>
        )
    }
}

export default loginComponent;