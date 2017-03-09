/**
 * Created by duanguang on 2017/3/9.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HelloMessage from '../component/demo/index'
import NameIndex from '../component/demo1/index'
import StateIndex from '../component/demo2/index';
import AppIndex from '../component/demo3/index';
import Counter from "../component/counter/Counter";
import SignupForm from '../component/demo4/index';
ReactDOM.render(
    <SignupForm ></SignupForm>,
    document.getElementById('app')
);