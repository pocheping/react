'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class Tagg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tag:'松果自办'
        }
    }
    render(){
        return(
            <div className="tagg">
                <span className="tagSpan"><span>▌</span>{this.props.data1}</span>
                <Link to="/my">更多></Link>
            </div>
        )
    }
}
export default Tagg;