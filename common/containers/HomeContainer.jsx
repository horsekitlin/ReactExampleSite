import React, { Component, PropTypes } from 'react';

import {
    connect,
} from 'react-redux';
import {
    bindActionCreators,
} from 'redux';

import {
    Nav,
    MenuItem,
    Navbar,
    NavDropdown,
    NavItem,
} from 'react-bootstrap';
import _ from 'lodash';
import * as UserActions from '../actions/UserActions';
import Sidebar from '../components/Sidebar';
import FontAwesome from 'react-fontawesome';

class HomeContainer extends Component {

    // props contains dispatch fn and all reducers, passed in by @connect
    // dispatch: function
    // products: Record
    // carts: Record
    constructor(props, context) {
        super(props, context);
        this.actions = bindActionCreators(UserActions, props.dispatch);
        this.state = {
            isOpen: false,
        };
    }

    render() {

        return (
        <div>
            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <a
                          onClick={() => this.setState({
                              isOpen: !this.state.isOpen
                          })}
                          className="navbar-brand"
                          href="#">Tomas Demo Site</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                        <li><a href="http://horsekitlin.github.io/">
                            <FontAwesome
                                name="user" size="2x"/>
                                Tomas</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
            <Sidebar
                customBurgerIcon={<div />}
                isOpen={this.state.isOpen}/>

        </div>
      );
    }

};

function mapStateToProps(state, ownProps) {

    const {
    } = state;
    return {
    };
}


// 使用 connect 精準獲取這個 view 需要的資料源，如此可減少日後不必要的 redraw
export default connect(mapStateToProps, null, null, {withRef: true})(HomeContainer);
