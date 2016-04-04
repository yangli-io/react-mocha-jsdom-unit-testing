import React, { Component, PropTypes } from 'react';

export default class HideAndShow extends Component {
	static propTypes = {
		hide: PropTypes.bool
	};

	static defaultProps = {
		hide: false
	}

	render() {
		if (this.props.hide) {
			return null
		} else {
			return <div>
				{this.props.children}
			</div>;
		}
	}
}