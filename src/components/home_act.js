'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class HomeAct extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
       
    render(){
         if(this.props.data1){
            this.state.act = this.props.data1.map(function(act,index){
                return(
                    <div className="cardBox" key={index}>
                        <Link to="/my">
                            <div className="homeAct">
                                <div className="ActImg">
                                    <img alt="example"  src={act.img} />
                                </div>
                                <div className="ActTxt">                     
                                    <p>{act.p}</p>
                                    <div className="act_text">
                                        <span className="actspan1">{act.span1}</span>
                                        <span className="actspan2">{act.span2}</span>
                                    </div>
                                </div>
                            </div>   
                        </Link>  
                    </div> 
                )
            })
        }
        return(
            <div className="Act">
                {this.state.act}
                
           </div>
        )
    }
}
export default HomeAct;