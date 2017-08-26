'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class FindTag extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tag:''
        }
    }
    render(){
        return(
            <div className="findtag">              
                <Link to="/my">
                    <div>
                        <img src="./img/find_icon_article.png" alt=""/>
                    </div>
                </Link>
                 <Link to="/my">
                 <div>
                    <img src="./img/find_icon_line.png" alt=""/>
                    </div>
                </Link>
                 <Link to="/my">
                 <div>
                    <img src="./img/find_icon_colunm.png" alt=""/>
                    </div>
                </Link>
            </div>
        )
    }
}
export default FindTag;