'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class MyBody extends React.Component{
    
    
    render(){
        

        return(
            <div className="mybody">
                <div className="mylogin">
                    <div className="mobile">
                        <img src="./img/ic_phone.png"/>
                        <input type="text" placeholder="手机号"/>
                    </div>
                    <div className="mobile">
                        <img src="./img/ic_pwd.png"/>
                        <input type="text" placeholder="密码"/>
                    </div>
                </div>
                <div className="mybutton">
                    <Link to="/"><button>登录</button></Link>
                </div>
                <div className="myreg">
                    <Link to="/">立即注册></Link>
                    <span>|</span>
                    <Link to="/">忘记密码></Link>
                </div>
                <div className="line">
                    <div><hr/></div>
                    <span>使用社交账号登录</span>
                    <div><hr/></div>
                </div>
                <div className="wechat">
                    <Link to="/">
                        <div className="ic">
                            <img src="./img/ic_wechat.png" alt=""/>
                            <span>微信</span>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="ic">
                            <img src="./img/ic_weibo.png" alt=""/>
                            <span>微博</span>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default MyBody;