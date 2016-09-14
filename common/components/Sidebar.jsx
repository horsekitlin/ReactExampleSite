/**
    @flow
**/
import React, {Component, PropTypes} from 'react';
var Menu = require('react-burger-menu').slide;
import {
	ListGroup,
	ListGroupItem,
} from 'react-bootstrap';

import SidebarContent from 'react-metismenu';
import {
	SideMenu,
} from '../constants/buildVar';

export default class Navbar extends Component {
	static defaultProps = {};

	static propTypes = {
		isOpen: PropTypes.bool.isRequired,
	}

	render() {

		return (
			<Menu id={ "page-wrap" }
				isOpen={this.props.isOpen}
				customBurgerIcon={this.props.customBurgerIcon}>
				<SidebarContent content={SideMenu} />

			</Menu>
		);
	}
}
