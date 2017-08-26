'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles :[]
        }
    }
    render(){
        if(this.props.data1){
            // console.log(this.props.data1);
            this.state.article = this.props.data1.map(function(article,index){
                return( 
                    <Link to="/my" key={index}>
                        <div className="article" >
                        
                            <img src={article.img}/>
                            <div className="article_text">
                                <h5>{article.h4}</h5>
                                <p>{article.p}</p>
                                <span>{article.span}</span>
                            </div>
                            
                        </div>
                    </Link>
                )
            })
        }
       
        return(
            <div className="articleBox">
                {this.state.article}
                
            </div>
        )
    }
}
export default Article;