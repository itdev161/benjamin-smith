  
import React from 'react';
import logo from './logo.svg';
import './App.css';
 activity-8
import axios from  'axios';

import axios from 'axios';
 activity-9

 master
 master
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

class App extends React.Component {
  state = {
    data: null,
    token: null,
    user: null
 activity-9
  }

  authenticateUser = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      localStorage.removeItem('user')
      this.setState({ user: null });
    }

    if (token) {
      const config = {
        headers: {
          'x-auth-token': token
        }
      }
      axios.get('http://localhost:5000/api/auth', config)
        .then((response) => {
          localStorage.setItem('user', response.data.name);
          this.setState({ user: response.data.name });
        })
        .catch((error) => {
          localStorage.removeItem('user');
          this.setState({ user: null });
          console.log(`Error logging in: ${error}`);
        })
    }
  }

  logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({ user: null, token: null });

 master
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
      .then((response) => {
        this.setState({
          data: response.data
        })
 activity-9

 activity-8
 master
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      })

      this.authenticateUser();
  }
 activity-9
  render() {
    let { user, data } = this.state;
    const authProps = {
      authenticateUser: this.authenticateUser,


  authenticateUser = () => {
    const token = localStorage.getItem('token');

    if(!token) {
      localStorage.removeItem('user')
      this.setState({ user: null });
    }

    if(token) {
      const config = {
        headers: {
          'x-auth-token': token
        }
      }
      axios.get('http://localhost:5000/api/auth', config)
        .then((response) => {
          localStorage.setItem('user', response.data.name)
          this.setState({ user: response.data.name })
        })
        .catch((error) => {
          localStorage.removeItem('user');
          this.setState({ user: null });
          console.error(`Error logging in: ${error}`);
        })
    }
  }

  logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({ user: null, token: null });
  }


      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      })
  }
 master
  render() {
    let { user, data } = this.state;
    const authProps = {
    authenticateUser: this.authenticateUser
 master
    }
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>GoodThings</h1>
            <ul>
              <li>
activity-9
                <Link to="/">Home</Link>

 activity-8
                <Link to ="/">Home</Link>

                <Link to="/">Home</Link>
 master
 master
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
activity-9
                {user ?
                  <Link to="" onClick={this.logOut}>Log out</Link> :
                  <Link to="/login">Log in</Link>
                }

 activity-8
                {user ?
                <Link to="" onClick={this.logOut}>Log out</Link> :
                <Link to="/login">Login</Link>
                }


                <Link to="/login">Login</Link>
master
master
              </li>
            </ul>
          </header>
          <main>
 activity-9

 activity-8
 master
              {user ?
                <React.Fragment>
                  <div>Hello {user}!</div>
                  <div>{data}</div>
                </React.Fragment> :
                <React.Fragment>
                  Please Register or Login
                </React.Fragment>
              }

            </Route>
            <Switch>
 activity-9
              <Route 
                exact path="/register" 
                render={() => <Register {...authProps} />} />
              <Route 
                exact path="/login" 
                render={() => <Login {...authProps} />} />

              <Route
                exact path="/register" 
                render={() => <Register {...authProps} />} />
              <Route 
              exact path ="/login" 
              render={() => <Login {...authProps} />} />

              {this.state.data}
            </Route>
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
 master
 master
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;