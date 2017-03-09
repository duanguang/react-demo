/**
 * Created by duanguang on 2017/3/9.
 */
import * as React from 'react';

export default class Counter extends React.Component{
    defaultProps={
        count:0
    }
    constructor(props){
        super(props);
        this.state={
            count:this.defaultProps.count
        }
    }
    onChange(count){
        this.setState({
            count:count
        })
    }
    handleChange(even){
        let num=parseInt(even.target.value);
        if(isNaN(num)){
            num=0;
        }
        this.defaultProps.count=num;
        this.onChange(this.defaultProps.count);
    }

    increment(){//+
        this.defaultProps.count=this.defaultProps.count+1;
        this.onChange(this.defaultProps.count);
    }

    decrement(){//-
        this.defaultProps.count=this.defaultProps.count-1;
        this.onChange(this.defaultProps.count);
    }
    render(){
        const {count} = this.state;
        return(
            <div>
                <button onClick={this.increment.bind(this)}>
                    Increment+
                </button>
                {' '}
                <button onClick={this.decrement.bind(this)}>
                    Decrement-
                </button>
                <hr />
                <div>
                    <input className="counter-value"  value={count} onChange={this.handleChange.bind(this)}/>
                    Clicked: {count} times
                </div>
            </div>
        )
    }
}