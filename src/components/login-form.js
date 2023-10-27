import React from 'react';

export default class LoginForm extends React.Component {
    render () {
        return (
            <div className='container' id='LoginFormStyle'>
                <h3>Log In:</h3>
                <form className='form-group'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder='Enter your Username' className='form-control' id='username'></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder='Enter your Password' className='form-control' id='password'></input><br></br>
                    <button type='submit' className='btn btn-primary'>Submit</button>                
                </form>
            </div>
        );
    }
}