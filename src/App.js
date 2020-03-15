import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import Navbar from './components/layout/Navbar';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/layout/NotFound';
import store from './store';

import './reset.css';
import './App.css';

const App = () => {
  return (
  	<Provider store={store}>
			<BrowserRouter>
				<div className='container'>
					{/* <Navbar /> */}
					<Switch>
						<Route exact path='/' component={Posts} />
						<Route path='/posts/:id' component={Post} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
  );
};

export default App;
