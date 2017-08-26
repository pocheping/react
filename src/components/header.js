'use strict';
import React from 'react';
import {Icon} from 'antd';
import store from '../store/store';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    
    
    render(){
        // var h = (this.props.data1.h3);

        return(
            <header ref="header">
                <h3>坚果</h3>
                <div>
                     <Link to="/my"><Icon type="search" /></Link>
                </div>
            </header>
        )
    }
}
export default Header;