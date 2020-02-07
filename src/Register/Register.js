import './Register.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
const { API_ENDPOINT } = require('../config')
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_email: '',
            password: '',
            user_name:'',
            confirm_password: ''
        }
    }
    state = {
        error: null
      };
    updateEmail(user_email) {
        this.setState({user_email: user_email});
    }
    updateName(user_name) {
        this.setState({user_name: user_name});
    }
    updatePassword(password) {
        this.setState({password: password});
    }
    updateConfirmPassword(confirm_password) {
        this.setState({confirm_password: confirm_password});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            error: null
          });
        AuthApiService.postUser({
            user_name: this.state.user_name,
            user_email: this.state.user_email,
            password: this.state.password
        })
        .then(res=>{
            if(!res.ok){
                throw res
            }
            return res.json()
        })
        .then(data=>
            this.props.routeProps.history.push("/login")
        )
        .catch(res => {
            this.setState({
              error: res.error
            });
          });
    }
    
    // addUser(user) {
    //     fetch(`${API_ENDPOINT}/user`, {
    //         method: 'POST',
    //         body: user,
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //     .then(res=>{
    //         if(!res.ok){
    //             throw res
    //         }
    //         return res.json()
    //     })
    //     .then(data=>
    //         this.props.routeProps.history.push("/login")
    //     )
    //     .catch(err => {
    //         if(err.status===400){
    //             this.setState(
    //                 {error: "USERNAME OR EMAIL ALREADY TAKEN! PLEASE CHANGE"})
    //         }
    //         console.log('this is the err',err)
    //         })
    // }
    render() {
        const { error } = this.state;
        return (
            <div className="login">   
            <section role='alert'> {error && <p className='red'> {error} </p>} </section>{' '}     
                <h2>Register</h2>
                <form className="form-group" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="email">Email</label>
                    <input required type="email" name="email" id="email" onChange={e => this.updateEmail(e.target.value)}/>
                    <label htmlFor="name">Username</label>
                    <input required type="name" name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input required type="password" name="password" id="password" onChange={e => this.updatePassword(e.target.value)}/>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input required type="password" name="confirm_password" id="confirm_password" onChange={e => this.updateConfirmPassword(e.target.value)}/>
                    <div className="buttons">
                        <button type="submit">
                            Register
                        </button>
                        <Link to='/'>
                            <button>Back</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;