"use strict";

import React from 'react';
// import MyBody from '../components/my_body';
import {Button} from 'antd';
import Header1 from '../components/header1';
import DetailInfo from '../components/detail_info';
class Detail extends React.Component {
  constructor(props){
      super(props)
      
       this.state = {
        banner: [],
        tag:''
      }

      fetch('http://localhost:3000/detail').then(response =>{
          return response.json()
      }).then(result =>{
          // console.log(result.article);
          this.setState({
            banner:result.banner
          })
         
      })
  }
  componentDidMount(){
      // console.log(this)
  }
  render() {
    return (
      <div id="detail" >
        <Header1/>
        <DetailInfo data1={this.state.banner}/>
      </div>
    )
  }
}

export default Detail;
