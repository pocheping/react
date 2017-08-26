"use strict";

import React from 'react';
import Header from '../components/header';
import Tagg from '../components/tag';
import ActiveSelf from '../components/active_self';
import Around from '../components/active_around';
import HomeAct from '../components/home_act';
import {Link} from 'react-router-dom'
class Active extends React.Component {
   constructor(props){
      super(props)
      
       this.state = {
        banner: [],
        tag:''
      }

      fetch('http://localhost:3000/active').then(response =>{
          return response.json()
      }).then(result =>{
          // console.log(result.article);
          this.setState({   
            tag:result.tag,
            self:result.self,
            act:result.act
          })
          // console.log(result.self);
         
      })
  }
  componentDidMount(){
    // console.log(this.refs.header.refs.header.children[0]);
    this.refs.header.refs.header.children[0].innerHTML = "活动";
    this.refs.header.refs.header.children[1].remove();
    var a = document.createElement('a');
    a.innerHTML = "青岛∨";
    a.href = "/active";
    a.className="place";
    this.refs.header.refs.header.appendChild(a);
  }
  render() {
    return (
      <div id="active">
        <Header ref="header"/>
        <Tagg data1={this.state.tag[0]}/>
        <ActiveSelf data1={this.state.self}/>
        <Around/>
        <HomeAct data1={this.state.act}/>
        
      </div>
    )
  }
}

export default Active;
