/**
 * Created by duanguang on 2017/3/9.
 */
import * as React from 'react';

export default class IndexChildren extends React.Component{
    // static title="组件还未加载";
    constructor(props) {
        super(props);
        this.getInitialState();
    }
    getInitialState(){

    }
    componentWillUpdate(nextProps,nextState){
        console.log(nextProps)
    }
    render(){
        return(
            <div>
                Hello children{this.props.title}
            </div>
        )
    }
}