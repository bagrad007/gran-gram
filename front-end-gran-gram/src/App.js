import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js'

import Navbar from './components/NavBar/Navigation.js'
// import Posts from './components/Posts/Posts.js'
const App = () => {

  const dispatch = useDispatch()
  useEffect(() => { dispatch(getPosts()) }, [dispatch])

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
