import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Input, Button, Header } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';

class LoginForm extends Component {
	onEmailChange(text){
		this.props.emailChanged(text);
	}

	render(){
		return (
			<View>
				<Header headerText="Login"/>
				<Card>

					<CardSection>
						<Input 
							label="Email"
							placeholder="email@gmail.com"
							onChangeText={this.onEmailChange.bind(this)}
						/>
					</CardSection>
						
					<CardSection>
						<Input 
							secureTextEntry
							label="Password"
							placeholder="password"
						/>
					</CardSection>

					<CardSection>
						<Button>
							Login
						</Button>
					</CardSection>
				</Card>
			</View>
		);
	}
}



export default connect(null, {emailChanged})(LoginForm);