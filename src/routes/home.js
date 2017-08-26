"use strict";

import React from 'react';

import Header from '../components/header';
import Banner from '../components/banner';
import Tagg from '../components/tag';
import Article from '../components/home_article';
import HomeCard from '../components/home_card';
import HomeAct from '../components/home_act';
import Topic from '../components/topic';
import {Link,NavLink} from 'react-router-dom'
// import Detail from '../routes/detail';
// import MsgListPage from '../components/scroll';
class Home extends React.Component {
  constructor(props){
      super(props)
      
       this.state = {
        banner: [],
        tag:''
      }

      fetch('http://localhost:3000/home').then(response =>{
          return response.json()
      }).then(result =>{
          // console.log(result.article);
          this.setState({
            banner:result.banner,
            article:result.article,
            card:result.card,
            tag:result.tag,
            act:result.act,
            topic:result.topic
          })
         
      })
  }
 
  render() {
    return (
     
      <div id="home">
        
        <Header />
        {/* <MsgListPage/> */}
         <Banner data1={this.state.banner} ref="banner"/> 
        <Tagg data1={this.state.tag[0]}/>
        <Article data1={this.state.article}/>
        <Tagg data1={this.state.tag[1]}/>
        <HomeCard data1={this.state.card}/>
        <Tagg data1={this.state.tag[2]}/>
        <HomeAct data1={this.state.act}/>
        <Tagg data1={this.state.tag[3]}/>
        <Topic data1={this.state.topic}/>

     
      </div>
      
    )
  }
}

export default Home;
