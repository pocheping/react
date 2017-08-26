"use strict";

import React from 'react';
import Tagg from '../components/tag';
import Header from '../components/header';
import FindSelect from '../components/find_select';
import FindLife from '../components/find_life';
import FindTag from '../components/find_tag';
import Topic from '../components/topic';

class Find extends React.Component {
  constructor(props){
      super(props)
      
       this.state = {
        banner: [],
        tag:''
      }

      fetch('http://localhost:3000/find').then(response =>{
          return response.json()
      }).then(result =>{
          // console.log(result.article);
          this.setState({   
            tag:result.tag,
            select:result.select,
            life:result.life,
            topic:result.topic
          })
          // console.log(result.self);
         
      })
  }
     componentDidMount(){
    // console.log(this.refs.header.refs.header.children[0]);
    this.refs.header.refs.header.children[0].innerHTML = "发现";
    this.refs.header.refs.header.children[1].remove();

  }
  render() {
    return (
      <div id="find">
        <Header ref="header"/>
        <Tagg data1={this.state.tag[0]}/>
        <FindSelect data1={this.state.select}/>
        <Tagg data1={this.state.tag[1]}/>
        <FindLife data1={this.state.life}/>
        <FindTag/>
        <Tagg data1={this.state.tag[2]}/>
        <Topic data1={this.state.topic}/>
        
      </div>
    )
  }
}

export default Find;
