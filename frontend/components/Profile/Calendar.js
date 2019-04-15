import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Text, View, TextInput, Button } from 'react-native';

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate : moment()
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(date) {
		this.setState({
			startDate : date
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		let main = this.state.startDate;
		console.log(main.format('L'));
	}

	render() {
		return (
			<View className="container">
				<Text>React Datepicker Example</Text>

				<View className="form-group">
					<DatePicker
						selectedValue={this.state.startDate}
						onValueChange={this.handleChange}
						name="startDate"
						dateFormat="MM/DD/YYYY"
					/>
				</View>
				<View>
					<Button onPress={this.handleSubmit}>Add Date</Button>
				</View>
			</View>
		);
	}
}

export default Calendar;
