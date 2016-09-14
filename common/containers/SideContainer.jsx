import React, { Component, PropTypes } from 'react';

import {
    connect,
} from 'react-redux';
import {
    bindActionCreators,
} from 'redux';

import Sidebar from '../components/Sidebar';

class LoginContainer extends Component {

    // props contains dispatch fn and all reducers, passed in by @connect
    // dispatch: function
    // products: Record
    // carts: Record
    constructor(props, context) {
        super(props, context);
        this.state = {
            isOpen: false
        };
    }

    render() {

        return (
            <div>
                <Sidebar
                    isOpen={this.state.isOpen}
                    customBurgerIcon={null}/>
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
export default connect(mapStateToProps, null, null, {withRef: true})(LoginContainer);
