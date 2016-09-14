import React, { Component, PropTypes } from 'react';
import DevTools from './DevTools';

export default class TodoApp extends Component {

    static contextTypes = {
        store: React.PropTypes.object.isRequired,
    };

    constructor(props){
        super(props);
    }

    render() {
        let tool = ( 'undefined' !== typeof window && true == window.$REDUX_DEVTOOL ) ? <DevTools /> : null;
        let nodes = (
            <div>
                {this.props.main}
                {tool}
            </div>
        )

        return nodes;
    }

}
