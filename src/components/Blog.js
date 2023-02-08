import React from 'react'
import { Link } from "react-router-dom"
import Card from './Card'

const Blog = ({ blogdetail }) => {

  // console.log({blogdetail});
  const readMore = () => {

  }
  return (
    <div>
      <div class='d-flex flex-row flex-wrap '>
        {/* console.log({blogdetail}); */}
          {blogdetail?.length > 0 ? (
            blogdetail?.map((m) => {
              // console.log(m);
              return <Card bloginfo={m} />
            })
          ) : ('')}
        
      </div>
      <Link to='/article'> Ream more ↗ </Link>
    </div>
  )
}

export default Blog