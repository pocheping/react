'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class FindSelect extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tag:''
        }
    }
    render(){
        if(this.props.data1){
            this.state.select = this.props.data1.map(function(select,index){
                return(
                    <div className="selectbox" key={index}>
                        <Link to="/">
                           <img src={select.img} alt=""/>
                        </Link>
                    </div>
                )
            })
        }
        return(
            <div className="find_select">
                {this.state.select}
            </div>
        )
    }
}
export default FindSelect;