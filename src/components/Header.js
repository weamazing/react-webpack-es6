import React, { Component } from 'react';

class Header extends Component {
	constructor() {
        super();
	}

	render() {
		return (
			<h1 className="notice">Hello React, Webpack and ES6!</h1>
		);
	}
};

export default Header;