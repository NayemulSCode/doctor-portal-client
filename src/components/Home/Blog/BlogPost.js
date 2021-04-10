import React from 'react';
import {faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BlogPost = (props) => {
    const { title,date,description,author,authorImg } = props.blog;
    return (
        <div className="card shadow-sm mx-2">
            <div className="card-header d-flex align-items-center">
                <img className="mx-3" src={authorImg} width="60px" alt=""/>
                <div>
                    <h6 className="text-primary">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                    <h5>{title}</h5>
                    <p className="card-text text-secondary mt-4">{description}</p>
                    <FontAwesomeIcon className="rightArrow" icon={faLongArrowAltRight} style={{fontSize:'30px'}} />
            </div>
            
        </div>
    );
};

export default BlogPost;