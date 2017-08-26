"use strict";

import React from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'antd';
import {hashHistory} from 'React-router';
class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
     }
    }
    componentDidMount(){
        var a = document.getElementsByClassName('banner_a');
        // console.log(a);
       
    }
    aaa(){
        console.log();
    }
    
  render() {
    
    // console.log(this.banner);
    let banners = this.props.data1.map(function(banner,index){
        // console.log(banner);
        return (
            <div key={index}>
                <Link className="banner_a"  to="/detail"  >
                    <img src={banner.img} /> 
                    <div className="banner_text">
                        <h6>{banner.h4}</h6>
                        <p>{banner.p}</p>
                        <span>{banner.span}</span>   
                    </div>
                </Link>
            </div>
        )
                
    })
    
    
    return (
        <div id="banner"> 
            <img className="banner_title" src="./img/banner_title.png" alt=""/>
            <Carousel autoplay="true" dots="false">
                 {banners}
                <div>
                    <Link className="banner_a" to="/detail" onClick={this.aaa}>
                        <img src='./img/banner3.jpg' ref="idx"/> 
                        <div className="banner_text">
                            <h6>活动</h6>
                            <p>松果放映|在故事中，看见与家人间深埋已久的爱</p>
                            <span>和坚果君一起观影，品味亲情</span>   
                        </div>
                    </Link>
                </div>
                <div>
                    <Link className="banner_a" to="/detail" onClick={this.aaa}>
                        <img src='./img/banner4.jpg'/> 
                        <div className="banner_text">
                            <h6>From坚果</h6>
                            <p>互动福利|如果有机会GapYear，你最想去做什么？</p>
                            <span>Gap Year是让人停下来充电的一年，你想去做什么。</span>   
                        </div>
                    </Link>
                </div>
            </Carousel>
        </div>
    )
  }

}

export default Banner;
