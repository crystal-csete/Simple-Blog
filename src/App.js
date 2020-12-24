import React from 'react';
import store from './redux/createStore';
import { Provider } from 'react-redux';
import "./App.css";

import NewPost from './components/NewPosts';
import PostList from './components/PostList';
import Footer from './components/Footer';
// import Navigation from './components/Navigation';



const App = () => {
  return (
    <Provider store={store}> 
    <div>
      {/* <Navigation /> */}
      <div>
        <h1>Posts!</h1>
        <NewPost />
        <PostList />
      </div>
      <Footer />
      
    </div>
    </Provider>
  )
}

export default App
