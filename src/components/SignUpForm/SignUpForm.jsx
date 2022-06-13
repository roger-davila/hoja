import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <form className='auth-form' autoComplete="off" onSubmit={this.handleSubmit}>
          <h3>Hoja</h3>
          <p>Create an Account with Hoja</p>
          <div className='auth-input-container'>
            <label>Name</label>
            <input className='auth-input' type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          </div>
          <div className='auth-input-container'>
            <label>Email</label>
            <input className='auth-input' type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </div>
          <div className='auth-input-container'>
            <label>Password</label>
            <input className='auth-input' type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </div>
          <div className='auth-input-container'>
            <label>Confirm</label>
            <input className='auth-input' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          </div>
          <button className='auth-button' type="submit" disabled={disable}>Sign Up</button>
          <p>Already Have an account? <span className='form-switch' onClick={() => this.props.setShowSignUp(showSignUp => !showSignUp)}>Log In</span></p>
          <p className="error-message">{this.state.error}</p>
        </form>
      </>
    );
  }
}