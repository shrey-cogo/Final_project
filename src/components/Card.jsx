import React from 'react'
import react, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import articles from '../pages/Articles';
import { Link } from 'react-router-dom';

const Card = ({bloginfo}) => {
    // console.log(bloginfo[0]);
    // console.log({bloginfo});
    console.log(bloginfo)

    const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs({
      id: 1,
      title: "Title",
      date: "01-01-2000",
      category: "Design",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imgsrc: './blosgimg.jpeg',
    });
  }, []);

  return (
    <div  style={{width:'50%', padding:'1em 8em ' }}>
        {/* <div className="blog-content flex flex-col">
          <img className="w-80 h-80" src={blogs.imgsrc} />
          <div className="flex flex-row blog-info">
            <div className="flex flex-col">
              <div>{blogs.title}</div>
              <div>{blogs.date}</div>
            </div>
            <div>{blogs.category}</div>
          </div>
          <div>
            {blogs.text}
            <a href="#">Read More</a>
          </div>
        </div> */}
        
        <div className="card" style={{width: '100%' , 'borderRadius':'20px'  }}>
            <div>
            <img src="/blosgimg.jpeg" className="card-img-top img-fluid" alt="..." style={{'borderRadius':'20px'}}/> 
            </div>
          
          <div style={{marginTop:'-15%',backdropFilter:'blur(5px)'}} >
            <div className='p-4'>
                   <div class="d-flex justify-content-between" style={{color:'#FFFFFF'}}>
                      <div>{bloginfo.author.name}</div>
                      <div>{bloginfo.updated_at} </div>

                   </div>
                   <div style={{color:'#FFFFFF'}}>
                      {/* {blogs.date} */}
                   </div>
            </div>     
          </div>
        <div className="card-body">
        <h5 className="card-title">{bloginfo.title}</h5>
         <p className="card-text">{bloginfo.text}</p>
        <Link className='btn' to="article" style={{color:'#6941C6'}}>
             Read post
        </Link>
          
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.8335 14.1667L14.1668 5.83337M14.1668 5.83337H5.8335M14.1668 5.83337V14.1667" stroke="#6941C6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </div>
    </div> 
    
    </div>
  )
}

export default Card;

