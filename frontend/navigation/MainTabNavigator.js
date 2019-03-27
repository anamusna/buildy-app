import _ from 'lodash';
import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Welcome from '../components/Welcome/Welcome';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import UsersignUp from '../components/SignUp/UsersignUp';
import Profile from '../components/Profile/Profile';
import RequestFormular from '../components/Profile/RequestFormular';

const ACTIVE_TAB_COLOR = '#69A6F7';
const INACTIVE_TAB_COLOR = '#aaa';

const Icon = ({ name, focused }) => (
	<Ionicons name={name} size={30} color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR} />
);

const LoginStack = createStackNavigator({
	Login      : {
		screen : Login
	},
	Home       : {
		screen : Home
	},
	SignUp     : {
		screen : SignUp
	},
	UsersignUp : {
		screen : UsersignUp
	}
});

const WelcomeStack = createStackNavigator({
	Welcome         : {
		screen : Welcome
	},
	Profile         : {
		screen : Profile
	},
	RequestFormular : {
		screen : RequestFormular
	}
});

export default createBottomTabNavigator(
	{
		Welcome : WelcomeStack,

		Users   : LoginStack
	},
	{
		initialRouteName  : 'Welcome',
		navigationOptions : ({ navigation }) => ({
			tabBarIcon : ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				console.log(routeName);
				if (routeName === 'Welcome') {
					name = 'ios-home';
				} else if (routeName === 'Users') {
					name = 'ios-options';
				}
				return <Icon name={name} size={30} color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR} />;
			}
		})
	}
);
