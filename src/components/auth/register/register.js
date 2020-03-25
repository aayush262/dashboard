import React from 'react';
import { Link } from 'react-router-dom';
import httpClient from './../../../utils/httpClient';
import './register.css'

const defaultForm = {
    name: '',
    email: '',
    address:'',
    username: '',
    password: '',
    gender:'',
    dob:''
}

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            data:{
                ...defaultForm
            },
            err:{
                ...defaultForm
            },
            isSubmitting: false,
            isValid: false
        }
    }

    handleChange = event => {
        const {name,value}= event.target;
        this.setState((prevState)=>{
            return {
                data:{
                    ...prevState.data,
                    [name]: value
                }
            }
        },()=>{
            this.handleErr(name);
        })
    }

    handleErr = (fieldName) =>{
        let err;
        switch (fieldName) {
            case 'username':
                err = this.state.data[fieldName]
                      ? this.state.data[fieldName].length > 6
                        ?  ''
                        : 'username must be at least 6 characters'
                      :'username is required'
                break;
            case 'password':
                err = this.state.data[fieldName]
                      ? this.state.data[fieldName].length > 6
                        ?  ''
                        : 'password must be at least 6 characters'
                      :'password is required'
                break;
            case 'email':
                err = this.state.data[fieldName]
                      ? this.state.data[fieldName].includes('@')
                        ?  ''
                        : 'invalid email'
                      :'email is required'
                break;
            default: break;
        }
        this.setState((prevState)=>{
            return{ 
                err: {
                    ...prevState.err,
                    [fieldName]:err
                }
            }
        },()=>{
            const {err} = this.state;
            const errors = Object.values(err).filter(err=>err);
            let isValid = errors.length===0;
            this.setState({
                isValid
            })
        })
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({
            isSubmitting: true
        })
        console.log(this.state.data)
        httpClient.post('/auth/register',this.state.data)
            .then(data=>{
                this.props.history.push('/login');
            })  
            .catch(err=>{
                console.log(err.response);
                this.setState({
                    isSubmitting: false
                })
            })
    }

    render(){
        let btn = this.state.isSubmitting
        ? <button className="btn btn-primary" disabled={true}>Registering</button>
        : <button className="btn btn-primary" disabled={!this.state.isValid} type="submit">Register</button>
        return(
            <div className="container">
                <h2>Register</h2>
                <p>Pls provide details to register</p>
                <form className ="form-group" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="Name" className="form-control"></input>
                    <label>Email</label>
                    <input onChange ={this.handleChange} type="text" name="email" placeholder="Email" className="form-control"></input>
                    <p className ="text-danger">{this.state.err.email}</p>
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Address" className="form-control"></input>
                    <label>Username</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="username" placeholder= "Username"></input>
                    <p className ="text-danger">{this.state.err.username}</p>
                    <label>password</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="password" placeholder= "********"></input>
                    <p className ="text-danger">{this.state.err.password}</p>
                    <label>Gender</label>
                    <br></br>
                    <input type="radio" value="male" name="gender"></input> Male <br></br>
                    <input type="radio" value="female" name="gender"></input> Female <br></br>
                    <input type="radio" value="others" name="gender"></input> Others <br></br><br></br>
                    <label>Date</label>
                    <input type="date" name="dob" placeholder="Name" className="form-control"></input>
                    <br></br>
                    {btn}
                </form>
                <p>Aleady Registered?</p>
                <p>Back to <Link to="/login">login.</Link></p>
            </div>
        )
    }
}

export default Register;