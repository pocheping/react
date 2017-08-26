'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class ActiveSelf extends React.Component{
     constructor(props){
        super(props);
        this.state={

        }
    }
    
    render(){
       
        if(this.props.data1){
            // console.log(this.props)
            this.state.self = this.props.data1.map(function(self,index){
                return(
                    
                        <div key={index}>
                            <Link to="/my">
                                <img src={self.img} />
                                <span>{self.span}</span>
                             </Link> 
                        </div>
                    
                )
            })
        }
        return(
           
            <div className="selfbox">
                { this.state.self}
            </div>
               
         
        )
    }
}
export default ActiveSelf;