/**
 * Created by duanguang on 2017/3/9.
 */
import * as React from 'react';

const HelloMessage=React.createClass({
    render:function () {
        const {name}=this.props;
        return <h1>Hello React {name}</h1>
    }
});

export default HelloMessage;