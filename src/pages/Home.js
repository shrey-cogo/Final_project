import React, { useState, useEffect } from 'react'
import Blog from '../components/Blog'
import Card from '../components/Card'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Footer from '../components/Footer'
import Authnav from '../components/Authnav'
const Home = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    check()

  }, [])

  const check = async () => {
    let d = await axios.get('http://172.25.25.166:3000/articles/all');
    // console.log(d.data);
    setBlogs(d.data);
    // console.log(blogs)
  }

  const [user,setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
     setUser(user);
    }
  }, []);


console.log(user);
  return (
    //navbar

    <div>
      {user ? <Authnav/>:<Navbar/>}
      
      {/* <h1 className='bg-red-400'>Home</h1> */}
      {/* //blog page section */}

      {/* //header section */}
      <Header />

      {/* //blog section */}
      <Blog blogdetail={blogs}/>
      {/* <Card/> */}
      
      {/* //cat section 1 */}

      {/* //cat section2 */}

      {/* //footer */}
      <Footer/>
    </div>
  )
}

export default Home