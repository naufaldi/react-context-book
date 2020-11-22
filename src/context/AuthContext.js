import React, { Component, createContext } from "react";

// making context
export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  };
  toggleAuth = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated,
    });
  };
  render() {
    return (
      <AuthContextProvider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContextProvider>
    );
  }
}
