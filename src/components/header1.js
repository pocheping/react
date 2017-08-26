'use strict';
import React from 'react';
import {Icon} from 'antd';
import store from '../store/store';
import {Link} from 'react-router-dom';
class Header1 extends React.Component{
    
    
    render(){
        // var h = (this.props.data1.h3);

        return(
            <header ref="header">
                <Link className="back" to = "/">＜</Link>
                <h3>活动详情</h3>
                <div>
                      <Link className="heart" to="/"><Icon type="heart-o" /></Link> 
                      <Link className="share" to="/" ><Icon type="export" /></Link>
                </div>
            </header>
        )
    }
}
export default Header1;