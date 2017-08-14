import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Header, Div, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
	onEmailChange(text){
		this.props.emailChanged(text);
	}

	onPasswordChange(text){
		this.props.passwordChanged(text);
	}

	onButtonPress(){
		const {email,password} = this.props;
		this.props.loginUser({ email, password });
	}

	renderButton(){
		if(this.props.loading) {
			return <Spinner size="large" />
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		);
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
							value={this.props.email}
						/>
					</CardSection>
						
					<CardSection>
						<Input 
							secureTextEntry
							label="Password"
							placeholder="password"
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
					</CardSection>

				</Card>
				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>
				<Div>
					{this.renderButton()}
				</Div>
			</View>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = ({auth}) => {
	const { email, password, error, loading } = auth;
	return { email, password, error, loading };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);