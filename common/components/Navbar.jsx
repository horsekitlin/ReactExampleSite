/**
    @flow
**/
import React, {Component, PropTypes} from 'react';

const FaBars = require('react-icons/lib/fa/bars');
const Menu = require('react-burger-menu').slide;

export default class Navbar extends Component {
	static defaultProps = {
		title: 'Default Title',
		renderSidebar: false
	};

	static PropTypes = {
		title: PropTypes.string.isRequired,
		renderSidebar: PropTypes.bool
	}

    constructor(props){
        super(props);
        this.state = {
            showSidebar: false,
        };
    }

	renderSidebar() {

		return (
			<Menu
                className="Sidebar"
                noOverlay={true}
                isOpen={false}
                width={300}>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/about">About</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
				<a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
			</Menu>
		);
	}

	render() {
        let SideBTN = null,
            Sidemenu = null;

        if(this.props.renderSidebar){
            SideBTN =
                <FaBars
                    className="logo"
                    onClick={() => this.setState({
                        showSidebar: !this.state.showSidebar
                    })}
                    size={25} />;

            Sidemenu = this.renderSidebar();
        }
		return (
			<nav className="navbar navbar-default" role="navigation">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">
                            {SideBTN}
							{this.props.title}
						</a>
					</div>
				</div>
				{this.props.children}
                {Sidemenu}
			</nav>
		);
	}
}
