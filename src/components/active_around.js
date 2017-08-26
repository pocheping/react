'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class Around extends React.Component{
    
    
    render(){


        return(
            <div className="around">
                <div className="left">
                    <Link to="/my">
                        <img src="./img/find_near_icon.png" />
                        <div className="around_text">
                            <h3>附近</h3>
                            <span>发现附近有趣的事</span>
                        </div>
                    </Link>
                </div>
                <div className="right">
                    <Link to="/my">
                        <img src="./img/find_calendar_icon.png" />
                        <div className="around_text">
                            <h3>日历</h3>
                            <span>查看近期正在举行</span>
                        </div>
                    
                    </Link>
                </div>
            </div>
        )
    }
}
export default Around;