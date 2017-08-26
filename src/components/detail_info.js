'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class DetailInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    componentDidMount(){
        // console.log(this.props);
    }
    render(){
        if(this.props.data1){
            // console.log(this.props.data1);
            this.state.banner = this.props.data1.map(function(banner,index){
                return(
                     <div className="detailInfo1" key={index}>
                        <img src={banner.img} alt=""/>
                        <div className="title">
                            <p>{banner.p}</p>
                            <span>{banner.span1}</span>
                        </div>
                        <div className="count">
                            <p>活动名额</p>
                            <span>{banner.span2}</span>
                        </div>
                        <div className="time">
                            <p>活动时间</p>
                            <span>{banner.span3}</span>
                        </div>
                        <div className="add">
                            <p>活动地址</p>
                            <span>{banner.span4}</span>
                            <span className="zz">></span>
                        </div>
                        <div className="focus">
                            <img src="./img/ic_launcher.png" alt=""/>
                            <div>
                                <span>坚果</span>
                                <span>连接美好生活</span>
                            </div>
                            <button>关注</button>
                        </div>
                    </div>
                )
            })
        }
        return(
            <div className="detailInfo">
              {this.state.banner}
            </div>
        )
    }
}
export default DetailInfo;