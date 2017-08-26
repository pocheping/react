'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class Topic extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tag:''
        }
    }
    render(){
        if(this.props.data1){
            this.state.topic = this.props.data1.map(function(topic,index){
                return(
                   <div className="topicbox" key={index}>
                       <Link to="/my">
                        <img src= {topic.img}/>
                        </Link>
                   </div>
                )
            })
        }
        return(
            <div className="topic">
                {this.state.topic}
            </div>
        )
    }
}
export default Topic;