/**
 * Created by duanguang on 2017/3/9.
 */

import * as React from 'react';


/*const NameIndex=React.createClass({
    renderName(){
        var names = ['Alice', 'Emily', 'Kate'];
        console.log(names)
        return names.map((item,index)=>{
            return <div key={index}>Hello, {item}!</div>
        })
    },
    render:function () {
        return (
            <div>
                {this.renderName()}
            </div>
        )
    }
});

export default NameIndex;*/

export default class NameIndex extends React.Component<void,void>{
    constructor(props) {
        super(props);
    }

    renderArray(){
        var render=[];
        render.push(<div>1111</div>)
        render.push(<div>2222</div>)
        return render;
    }
    renderName(){
        var names = ['Alice', 'Emily', 'Kate'];
        console.log(names)
        return names.map((item,index)=>{
            return <div key={index}>Hello, {item}!</div>
        })
    }
    render(){
        return(
            <div>
                {this.renderArray()}
            </div>
        )
    }
}


