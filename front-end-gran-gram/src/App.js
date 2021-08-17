import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Posts from './components/Posts/Posts.js'
import NewPost from './components/Form/NewPost'
import Auth from './components/Auth/Auth.js'

import Navbar from './components/NavBar/Navigation.js'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getPosts()) }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/login" exact component={Auth} />
        <Route path='/' exact component={Posts} />
        <Route path='/post/new' exact component={NewPost} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
