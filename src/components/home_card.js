'use strict';
import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
class HomeCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            card:[]
        }
    }
    render(){
        // console.log(this.props);
        // console.log(1);
        if(this.props.data1){
            // console.log(1);
            this.state.card = this.props.data1.map(function(card,index){
                return(
                    <Card  bodyStyle={{ padding: 0 }} key={index}>
                        <Link to="/my">
                        <div className="custom-image">
                            <img alt="example" width="100%" src={card.img} />
                        </div>
                        <div className="custom-card">
                            <h3>{card.h3}</h3>
                            <p>{card.p}</p>
                            <span className="new">{card.span1}</span>
                            <span>{card.span2}</span>
                            <h4>{card.h4}</h4>
                        </div>
                        </Link>
                    </Card>
                )
            })
        }
        return(
            <div className="card">
                <div className="cardbox">
                    {this.state.card}
                
                </div> 
            </div>
        )
    }
}
export default HomeCard;