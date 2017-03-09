/**
 * Created by duanguang on 2017/3/9.
 */

import * as React from 'react';
export default class StateIndex extends React.Component{
    constructor(props) {
        super(props);
        this.getInitialState();
    }
    getInitialState(){
        this.state={
            liked:false
        }
    }
    handleClick(){
        this.setState({liked: !this.state.liked});
    }
    render(){
        var text = this.state.liked ? 'like' : 'haven\'t  liked';
        return(
            <div>
                <p onClick={this.handleClick.bind(this)}>
                    You {text} this. Click to toggle.
                </p>
            </div>
        )
    }
}