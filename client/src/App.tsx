  
import React from 'react';
import logo from './logo.svg';
import './App.css';
 activity-8
import axios from  'axios';

import axios from 'axios';
 activity-10
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import CreatePost from './components/Post/CreatePost';
import EditPost from './components/Post/EditPost';

class App extends React.Component {
  state = {
    posts: [],
    post: null,
    token: null,
    user: null
  }

  componentDidMount() {
    this.authenticateUser();
  }

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
 master


  authenticateUser = () => {
    const token = localStorage.getItem('token');

 activity-10
    if(!token){
      localStorage.removeItem('user');
      this.setState({user: null});
    }

    if(token){

    if(!token) {
      localStorage.removeItem('user')
      this.setState({ user: null });
    }

    if(token) {
 master
      const config = {
        headers: {
          'x-auth-token': token
        }
      }
      axios.get('http://localhost:5000/api/auth', config)
        .then((response) => {
 activity-10
          localStorage.setItem('user', response.data.name);
          this.setState({
            user: response.data.name,
            token: token
          }, () => {
            this.loadData();
          });
        })
        .catch((error) => {
          localStorage.removeItem('user');
          this.setState({user: null});

          localStorage.setItem('user', response.data.name)
          this.setState({ user: response.data.name })
        })
        .catch((error) => {
          localStorage.removeItem('user');
          this.setState({ user: null });
 master
          console.error(`Error logging in: ${error}`);
        })
    }
  }

 activity-10
  loadData = () => {
    const {token} = this.state;

    if(token){
      const config = {
        headers: {
          'x-auth-token': token
        }
      };
      axios
        .get('http://localhost:5000/api/posts', config)
        .then((response) => {
          this.setState({
            posts: response.data
          })
        })
        .catch((error) => {
          console.error(`Error fetching data: ${error}`);
        });
    }
  };

  logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({user: null, token: null});
  }

  viewPost = (post: { title: any; }) => {
    console.log(`view ${post.title}`);
    this.setState({
      post: post
    });
  }


  deletePost = (post: { _id: any; }) => {
    const {token} = this.state;

    if(token){
      const config = {
        headers: {
          'x-auth-token': token
        }
      };

      axios
        .delete(`http://localhost:5000/api/posts/${post._id}`, config)
        .then(response => {
          const newPosts = this.state.posts.filter(p => p._id !== post._id);
          this.setState({
            posts: [...newPosts]
          });
        })
        .catch(error => {
          console.error(`Error deleting post: ${error}`);
        });
    }
  };


  editPost = (post: any) => {
    this.setState({
      post: post
    });
  };

  onPostCreated = (post: any) => {
    const newPosts = [...this.state.posts, post];

    this.setState({
      posts: newPosts
    });
  };

  onPostUpdated = (post: { _id: any; }) => {
    console.log('updated post: ', post);
    const newPosts = [...this.state.posts];
    const index = newPosts.findIndex(p => p._id === post._id);

    newPosts[index] = post;

    this.setState({
      posts: newPosts
    });
  };

  render() {
    let {user, posts, post, token} = this.state;
    const authProps = {
      authenticateUser: this.authenticateUser

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
 master
    }
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>GoodThings</h1>
            <ul>
              <li>
 activity-10
                <Link to="/">Home</Link>
              </li>
              <li>
                {user ?
                  <Link to="/new-post">New Post</Link> :
                  <Link to="/register">Register</Link>
                }
              </li>
              <li>
                {user ?
                  <Link to="" onClick={this.logOut}>Log out</Link> :
                  <Link to="/login">Log in</Link>
                } 

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
 master
              </li>
            </ul>
          </header>
          <main>
 activity-10
            <Switch>
              <Route exact path="/">
                {user ?
                  <React.Fragment>
                    <div>Hello {user}!</div>
                    <PostList
                      posts={posts}
                      clickPost={this.viewPost}
                      deletePost={this.deletePost}
                      editPost={this.editPost}
                    />
                  </React.Fragment> :
                  <React.Fragment>
                    Please Register or Login
                  </React.Fragment>
                }
              </Route>
              <Route path="/posts/:postId">
                <Post post={post}/>
              </Route>
              <Route path="/new-post">
                <CreatePost token={token} onPostCreated={this.onPostCreated}/>
              </Route>
              <Route path="/edit-post/:postId">
                <EditPost
                  token={token}
                  post={post}
                  onPostUpdated={this.onPostUpdated}
                />
              </Route>
              <Route 
                  exact path='/register'
                  render={() => <Register {...authProps} />} 
              />
              <Route
                  exact path="/login"
                  render={() => <Login {...authProps} />} 
              />

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
 master
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;