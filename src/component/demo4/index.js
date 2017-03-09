/**
 * Created by duanguang on 2017/3/9.
 */
import * as React from 'react';
const GenderSelect = React.createClass({
    render: function () {
        return <select onChange={this.props.handleSelect}>
            <option value="0">男</option>
            <option value="1">女</option>
        </select>
    }
})

const SignupForm = React.createClass({
    getInitialState: function () {
        return {
            name: '',
            password: '',
            gender: '',
        }
    },
    handleChange: function (name, event) {
        var newState = {}
        newState[name] = event.target.value
        this.setState(newState)
    },
    handleSelect: function (event) {
        this.setState({gender: event.target.value})
    },
    render: function () {
        console.log(this.state)
        return <form>
            <input type="text" placeholder="请输入用户名" onChange={this.handleChange.bind(this, 'name')}/>
            <input type="password" placeholder="请输入密码" onChange={this.handleChange.bind(this, 'password')}/>
            <GenderSelect handleSelect={this.handleSelect}></GenderSelect>
        </form>
    }
})
export default SignupForm;