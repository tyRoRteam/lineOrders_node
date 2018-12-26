import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor (props) {
		super (props);

		this.state = {
			ajaxResult: 'wait .....',
		}
	}

	componentDidMount () {
		const _this = this;
		axios.post('/ajax', {}).then(function(response) {
			_this.setState({
				ajaxResult: response.data,
			});
		})
		.catch(function(err) {console.log(err);});
	}

	render() {
		return (
			<div id="App">
				Hello Cat
				<div className="ajaxText">{this.state.ajaxResult}</div>
				<div className="ajaxText">{this.state.ajaxResult}</div>
			</div>
		);
	}
}

export default App;
