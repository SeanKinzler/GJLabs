import React from 'react';

export default ({loginSignUpSubmitHandler}) => {
  return (
    <div className='row'>
      <div>
        <img style={{width: '100%', marginTop: '10px'}} src="https://www.dambrewery.com/wp-content/uploads/2015/12/MakingDamBeer-17Taps-2000x700.jpg" />
      </div>
      <div>
        <div className='col s12'>
          <h3 className='center-align'>Fear no Beer</h3>
          <ul className="tabs">
            <li className="tab col s3"><a className="active" href="#login">Login</a></li>
            <li className="tab col s3"><a href="#signUp">Sign Up</a></li>
          </ul>
        </div>
        <div className="col s12">
          <br />
          <div className='row'>
            <form id="login" onSubmit={loginSignUpSubmitHandler} action="/login">
              <div className='input-field col s6'>
                <input name="username" type="text" />
                <label className="active" htmlFor="username">Username</label>
              </div>
              <div className='input-field col s6'>
                <input name="password" type="password" />
                <label className="active" htmlFor="password">Password</label>
              </div>
              <button className="btn waves-effect waves-light" type="submit" >Submit
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
        <div className="col s12">
          <br />
          <div className="row">
            <form id="signUp" onSubmit={loginSignUpSubmitHandler} action="/signup">
              <div className='input-field col s4'>
                <input name="firstName" type="text" />
                <label className="active" htmlFor="firstName">First Name</label>
              </div>
              <div className='input-field col s4'>
                <input name="lastName" type="text" />
                <label className="active" htmlFor="lastName">Last Name</label>
              </div>
              <div className='input-field col s4'>
                <input name="email" type="text" />
                <label className="active" htmlFor="email">Email</label>
              </div>
              <div className='input-field col s6'>
                <input name="username" type="text" />
                <label className="active" htmlFor="username">Username</label>
              </div>
              <div className='input-field col s6'>
                <input name="password" type="password" />
                <label className="active" htmlFor="password">Password</label>
              </div>
              <button className="btn waves-effect waves-light" type="submit" >Submit
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}