import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

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
	}

	render(){
		return(
			<Provider store={createStore(reducers)}>
				<View>
					<Text>Hello!</Text>
				</View>
			</Provider>
		);
	}
}

export default App;