'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class FindLife extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tag:''
        }
    }
    render(){
        if(this.props.data1){
            this.state.life = this.props.data1.map(function(life,index){
                return(
                    <div className="lifecard" key={index}>
                        <Link to="/">
                            <div className="lifebox">
                                <img src={life.img} alt=""/>
                                <p>{life.p}</p>
                                <span>{life.span}</span>
                            </div>                          
                        </Link>
                    </div>
                )
            })
        }
        return(
            <div className="find_life">
                <div className="findbox">
                    {this.state.life}
                </div>
               
            </div>
        )
    }
}
export default FindLife;