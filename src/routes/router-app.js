"use strict";

import React from 'react';
import store from '../store/store';
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom';

import Home from './home.js';
import Active from './active.js';
import Find from './find.js';
import My from './my.js';
import Detail from './detail';
class RouterApp extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            img:'./img/tab_home_mormal.png'
            
        }
    }
  
    
    render() {
        return (
            <BrowserRouter>
                <div className="appbox">
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/active' component={Active}></Route>
                    <Route path='/find' component={Find}></Route>
                    <Route path='/my' component={My}></Route>
                    <Route path='/detail' component={Detail}/>
                    <footer>
                        <ul className="footer_ul">
                            <li><NavLink  exact activeStyle={{ color: 'rgb(226,183,149)' }} to="/"><i className="iconfont icon-zhuye"></i><span>精选</span></NavLink></li>
                            <li><NavLink   activeStyle={{ color: 'rgb(226,183,149)' }} to="/active"><i className="iconfont icon-tishiyu"></i><span>活动</span></NavLink></li>
                            <li><NavLink  activeStyle={{ color: 'rgb(226,183,149)' }} to="/find"><i className="iconfont icon-kejian"></i><span>发现</span></NavLink></li>
                            <li><NavLink   activeStyle={{ color: 'rgb(226,183,149)' }} to="/my"><i className="iconfont icon-lianxiren"></i><span>我</span></NavLink></li>
                        </ul>
                    </footer>
                </div>
            </BrowserRouter>
        )
    }
}

export default RouterApp;
