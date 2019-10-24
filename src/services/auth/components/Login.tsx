import React, { ChangeEvent } from 'react';
import Router from 'next/router';

import { LoginCredentials } from '../data/types';

export interface LoginProps {}

export interface LoginState {
  credentials: LoginCredentials;
  isLoginLoading: boolean;
}

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      isLoginLoading: false,
      credentials: {
        email: '',
        password: '',
      },
    };
  }

  handleCredentialsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { credentials } = this.state;
    credentials[e.target.name] = e.target.value;

    this.setState({ credentials });
  }

  handleLoginSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.setState({ isLoginLoading: true });

    setTimeout(() => {
      this.setState({ isLoginLoading: false });
      Router.replace('/cars');
    }, 500);
  }

  render() {
    const { credentials } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form>
          <input
            id="formEmail"
            name="email"
            type="text"
            value={credentials.email}
            onChange={this.handleCredentialsChange}
          />
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={this.handleCredentialsChange}
          />

          <button id="loginSubmit" onClick={this.handleLoginSubmit}>
            {this.state.isLoginLoading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      </div>
    );
  }
}
