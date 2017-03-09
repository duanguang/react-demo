/**
 * Created by duanguang on 2017/3/9.
 */

import * as React from 'react';
import IndexChildren from 'indexChildren';
export default class AppIndex extends React.Component{
   // static title="组件还未加载";
    constructor(props) {
        super(props);
        this.getInitialState();
    }
    getInitialState(){
        this.state={
            opacity:1.0,
            title:'组件还未加载'
        }
    }
    componentWillMount(){
        /*this.setState({
            title:"组件正在加载"
        })*/
    }
    componentDidMount(){


       /* this.setState({
            title:"组件加载完毕"
        })*/


    }
    render(){
        console.log(this.state.title)
        return(
            <div style={{opacity: this.state.opacity}}>
                Hello{this.state.title}
                <IndexChildren title={this.state.title}></IndexChildren>
            </div>
        )
    }
}