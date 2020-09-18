import React, { useContext, useState } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { DestinationContext } from '../../App';
import logoImage from '../../images/Logo.png'
import facebookIcon from '../../images/Icon/fb.png'
import googleIcon from '../../images/Icon/google.png'
import { createUserWithEmailAndPassword, handleFacebookSignIn, handleGoogleSignIn, handleSignOut, initializeLogin, signInWithEmailAndPassword } from './LoginManager';

const Login = () => {
    const [destination, setDestination, loggedInUser, setLoggedInUser] = useContext(DestinationContext); 
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: ''
  });

  initializeLogin();

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/bookingConfirmation" } };

  const handleGoogle = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const handleFacebook = () => {
    handleFacebookSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }
  const signOut = () => {
    handleSignOut()
      .then(res => {
        handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isEmailValid = true;
    let isPassValid = true;
    if (e.target.name === 'email') {
      isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isPassValid = isPasswordValid && passwordHasNumber;
    }
    if (isEmailValid && isPassValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    e.preventDefault();
  }

    return (
        <div className='mb-5'>
        <div className='container'>
        <Navbar className='pt-4 navbar' expand="lg">
                <Link to="/home"><img style={{height:'50px', marginRight:'10px'}} src={logoImage} alt="logoImage"/></Link>
        </Navbar>
    </div>
            <div className='d-flex justify-content-center mt-3'>
                <div style={{ width:'30%' }} className="card">
                    <div className="card-body">
                        {newUser ? <h5 className="card-title mb-3">Create an account</h5> : <h5 className="card-title mb-4">Login</h5>}
                        <div className='form-group'>
                            <form onSubmit={handleSubmit}>
                                {newUser && <input className="form-control mb-3" onBlur={handleBlur} type="text" name="" placeholder="First Name" required />}
                                {newUser && <input className="form-control mb-3" onBlur={handleBlur} type="text" name="" placeholder="Last Name" required />}
                                <input className="form-control mb-3" type="text" onBlur={handleBlur} name="email" placeholder="Username or Email" required />
                                <input className="form-control mb-3" type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                                {newUser && <input className="form-control mb-3" onBlur={handleBlur} type="password" name="passwordCorrect" placeholder="Confirm Password" required />}
                                <div className='d-flex justify-content-between mb-2'>
                                </div>
                                <input type='submit' className="btn btn-warning btn-block mb-3" value={newUser ? 'Create an account' : 'Login'}></input>
                            </form>
                        </div>
                        <p className='text-center mb-0'>Already have an account? <Link onClick={() =>setNewUser(!newUser)} className='text-warning'>Login</Link></p>
                    </div>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-center mt-2'>
                    <span>Or</span>
            </div>
            <br/>

            <div className='d-flex flex-column align-items-center justify-content-center'>
                        <button onClick={handleGoogle} className='btn google-login d-flex align-items-center border mb-2'>
                            <img src={googleIcon} style={{ width: '25px', marginRight: '10px' }} alt="" />
                            <p className='m-0'>Sign in With Google</p>
                        </button>
                        <button onClick={handleFacebook} className='btn google-login d-flex align-items-center border'>
                            <img src={facebookIcon} style={{ width: '25px', marginRight: '10px' }} alt="" />
                            <p className='m-0'>Sign in With Facebook</p>
                        </button>
                </div>
            </div>
    );
};

export default Login;