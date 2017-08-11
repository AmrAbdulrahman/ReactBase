import React from 'react';
//import TextField from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';
//import classNames from 'classnames';
//import NotificationSystem from 'react-notification-system';
import _ from 'lodash';

//import genericExceptionHandler from '../../utils/generic-exception-handler';
//import api from '../../utils/api';
//import cookies from '../../utils/cookies';
//import auth from '../../utils/auth';
import router from '../../app.router';

export default class LoginState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'initial message',
      // email: '',
      // password: '',
      // valid: false,
      // loading: false,
      // success: false,
      // error: false,
      // errorMessage: null,
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: 'nice!'
      });
    }, 2000);
  }

  // componentWillMount() {
  //   if (auth.isLoggedIn() === true) {
  //     return router.go('dashboard');
  //   }
  // }
  //
  // onEmailChange(event) {
  //   let email = event.target.value;
  //
  //   this.setState({
  //     email: email,
  //     valid: email.length && this.state.password.length,
  //   });
  // }
  //
  // onPasswordChange(event) {
  //   let password = event.target.value;
  //
  //   this.setState({
  //     password: password,
  //     valid: this.state.email.length && password.length,
  //   });
  // }
  //
  // onLoginFormSubmit(event) {
  //   event.preventDefault();
  //
  //   this.setState({
  //     loading: true,
  //     error: false,
  //   });
  //
  //   api
  //     .post('login', {
  //       email: this.state.email,
  //       password: this.state.password,
  //     }, {
  //       anonymous: true,
  //     })
  //     .then(({ token, user }) => {
  //       let welcomingMessageTimeout = 2;
  //
  //       this.notifications.addNotification({
  //         message: `Welcome back ${_.capitalize(user.name)}!`,
  //         level: 'success',
  //         autoDismiss: welcomingMessageTimeout,
  //       });
  //
  //       auth.login(token, user);
  //
  //       this.setState({
  //         loading: false,
  //         success: true,
  //         error: false,
  //       });
  //
  //       setTimeout(() => {
  //         router.go('dashboard');
  //       }, welcomingMessageTimeout * 1000);
  //     }, (error) => {
  //       this.setState({
  //         loading: false,
  //         error: true,
  //         errorMessage: error.status === 404 ? 'Invalid username or password' : 'Something went wrong',
  //       });
  //     })
  //     .catch(genericExceptionHandler);
  // }

  // render() {
  //   return (
  //     <div className='main-wrapper login'>
  //       <div className='login-form-wrapper'>
  //         <form className='login-form' onSubmit={(e) => this.onLoginFormSubmit(e)}>
  //           <h1 className='title'>Al-Islam</h1>
  //           <h2 className='sub-title'>Admin Dashboard</h2>
  //           <div className='logo'></div>
  //             <TextField
  //               hintText='Email...'
  //               floatingLabelText='Email'
  //               type='text'
  //               value={this.state.email}
  //               disabled={this.state.loading || this.state.success}
  //               onChange={(e) => this.onEmailChange(e)}
  //             />
  //
  //             <TextField
  //               hintText='Password...'
  //               floatingLabelText='Password'
  //               type='password'
  //               value={this.state.password}
  //               disabled={this.state.loading || this.state.success}
  //               onChange={(e) => this.onPasswordChange(e)}
  //             />
  //
  //             <RaisedButton
  //               label='Login'
  //               primary={true}
  //               className='login-btn'
  //               disabled={!this.state.valid || this.state.loading || this.state.success}
  //               type='submit' />
  //
  //             <div className={classNames('message loading', { active: this.state.loading })}>Please wait...</div>
  //             <div className={classNames('message success', { active: this.state.success })}>Logging you in...</div>
  //             <div className={classNames('message error', { active: this.state.error })}>{this.state.errorMessage}</div>
  //         </form>
  //       </div>
  //
  //       <NotificationSystem ref='notificationSystem' />
  //     </div>
  //   );
  // }

  goToContacts() {
    router.go('contacts');
  }

  render() {
    return (
      <div className='main-wrapper login'>
        {this.state.message}

        <button onClick={() => this.goToContacts()}>Go to contacts</button>
      </div>
    );
  }

  // componentDidMount() {
  //   this.notifications = this.refs.notificationSystem;
  // }
}
