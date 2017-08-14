import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router'

class App extends Component {

	componentWillMount(){
		var config = {
		    apiKey: "AIzaSyAXp_aPDToFILkK0D4skoCWBQRWDu43D3U",
		    authDomain: "manager-30dee.firebaseapp.com",
		    databaseURL: "https://manager-30dee.firebaseio.com",
		    projectId: "manager-30dee",
		    storageBucket: "manager-30dee.appspot.com",
		    messagingSenderId: "525617959477"
		};
		firebase.initializeApp(config);

	}

	render(){
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return(
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;