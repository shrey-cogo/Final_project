import React, {useState , useRef ,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { v4 as uuid } from "uuid";
import { Link ,useNavigate } from "react-router-dom"
import Footer from '../components/Footer';



const Login = () => {
  
  const [emails,setEmails]=useState([]);
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const navigate=useNavigate();
    const [toke, setToke] = useState()
    const addEmail= async (e)=>{      
        const response  = await fetch('http://172.25.25.166:3000/auth/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value
          })
        })
        const data  = await response.json();

        console.log(data);
        if(data.error==='unauthorized')
        {
            alert('unauthorised');
        }
        else{
          localStorage.setItem("user",JSON.stringify(data));
        setToke(data);
        }
        
    }

    useEffect(() => {
      if(toke)navigate("/");
    }, [toke])
  return (
    <div >
        <Navbar/>
      
        <div class='d-flex justify-content-center pt-5'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_7220_186153)">
    <rect width="32" height="32" rx="8" fill="white"/>
    <rect width="32" height="32" rx="8" fill="url(#paint0_linear_7220_186153)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 2.03885C8.28923 2.03885 2.03861 8.28948 2.03861 16C2.03861 23.7106 8.28923 29.9612 15.9998 29.9612C23.7103 29.9612 29.9609 23.7106 29.9609 16C29.9609 8.28948 23.7103 2.03885 15.9998 2.03885ZM1.96094 16C1.96094 8.24658 8.24634 1.96118 15.9998 1.96118C23.7532 1.96118 30.0386 8.24658 30.0386 16C30.0386 23.7535 23.7532 30.0389 15.9998 30.0389C8.24634 30.0389 1.96094 23.7535 1.96094 16Z" fill="#D0D5DD"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.0779C13.8338 12.0779 12.0777 13.834 12.0777 16.0002C12.0777 18.1665 13.8338 19.9226 16 19.9226C18.1662 19.9226 19.9223 18.1665 19.9223 16.0002C19.9223 13.834 18.1662 12.0779 16 12.0779ZM12 16.0002C12 13.7911 13.7909 12.0002 16 12.0002C18.2091 12.0002 20 13.7911 20 16.0002C20 18.2094 18.2091 20.0002 16 20.0002C13.7909 20.0002 12 18.2094 12 16.0002Z" fill="#D0D5DD"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 13.3201C14.52 13.3201 13.3203 14.5198 13.3203 15.9997C13.3203 17.4796 14.52 18.6793 16 18.6793C17.4799 18.6793 18.6796 17.4796 18.6796 15.9997C18.6796 14.5198 17.4799 13.3201 16 13.3201ZM13.2427 15.9997C13.2427 14.4769 14.4772 13.2424 16 13.2424C17.5228 13.2424 18.7572 14.4769 18.7572 15.9997C18.7572 17.5225 17.5228 18.757 16 18.757C14.4772 18.757 13.2427 17.5225 13.2427 15.9997Z" fill="#D0D5DD"/>
    <path d="M15.9609 0H16.0386V32H15.9609V0Z" fill="#D0D5DD"/>
    <path d="M32 15.9609L32 16.0386L-3.39506e-09 16.0386L0 15.9609L32 15.9609Z" fill="#D0D5DD"/>
    <path d="M26.6021 0H26.6797V32H26.6021V0Z" fill="#D0D5DD"/>
    <path d="M10.6406 0H10.7183V32H10.6406V0Z" fill="#D0D5DD"/>
    <path d="M21.2817 0H21.3594V32H21.2817V0Z" fill="#D0D5DD"/>
    <path d="M5.32031 0H5.39798V32H5.32031V0Z" fill="#D0D5DD"/>
    <path d="M32 26.6016L32 26.6792L-3.39506e-09 26.6792L0 26.6016L32 26.6016Z" fill="#D0D5DD"/>
    <path d="M32 10.6406L32 10.7183L-3.39506e-09 10.7183L0 10.6406L32 10.6406Z" fill="#D0D5DD"/>
    <path d="M32 21.2812L32 21.3589L-3.39506e-09 21.3589L0 21.2812L32 21.2812Z" fill="#D0D5DD"/>
    <path d="M32 5.32031L32 5.39798L-3.39506e-09 5.39798L0 5.32031L32 5.32031Z" fill="#D0D5DD"/>
    <g filter="url(#filter0_dd_7220_186153)">
    <circle cx="16" cy="16" r="8" fill="url(#paint1_linear_7220_186153)"/>
    </g>
    <g filter="url(#filter1_b_7220_186153)">
    <path d="M0 16H32V19.2C32 23.6804 32 25.9206 31.1281 27.6319C30.3611 29.1372 29.1372 30.3611 27.6319 31.1281C25.9206 32 23.6804 32 19.2 32H12.8C8.31958 32 6.07937 32 4.36808 31.1281C2.86278 30.3611 1.63893 29.1372 0.871948 27.6319C0 25.9206 0 23.6804 0 19.2V16Z" fill="white" fill-opacity="0.2"/>
    </g>
    </g>
    <rect x="0.1" y="0.1" width="31.8" height="31.8" rx="7.9" stroke="#D0D5DD" stroke-width="0.2"/>
    <defs>
    <filter id="filter0_dd_7220_186153" x="5" y="6" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1"/>
    <feGaussianBlur stdDeviation="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7220_186153"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1"/>
    <feGaussianBlur stdDeviation="1.5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_7220_186153" result="effect2_dropShadow_7220_186153"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_7220_186153" result="shape"/>
    </filter>
    <filter id="filter1_b_7220_186153" x="-5" y="11" width="42" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5"/>
    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7220_186153"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7220_186153" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_7220_186153" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="#D0D5DD"/>
    </linearGradient>
    <linearGradient id="paint1_linear_7220_186153" x1="12" y1="24" x2="20" y2="8" gradientUnits="userSpaceOnUse">
    <stop stop-color="#53389E"/>
    <stop offset="1" stop-color="#6941C6"/>
    </linearGradient>
    <clipPath id="clip0_7220_186153">
    <rect width="32" height="32" rx="8" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    </div>
        <div class='d-flex justify-content-center'>
          
        
<div class=''>
<h1 class='py-3'>Log into your account</h1>
  <form>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <label class="form-label" >Email address</label>
    <input type="email" ref={emailRef} class="form-control" placeholder='Enter email'/>
    
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <label class="form-label" >Password</label>
    <input type="password" ref={passwordRef} class="form-control" placeholder='*********'/>
    
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <p class="form-check-label" style={{fontSize: "14px"}}> Remember me</p>
      </div>
    </div>

    <div class="col">
 
      <a href="#!" style={{fontSize: "14px"}}>Forgot password?</a>
    </div>
  </div>


  <button type="button" onClick={e=>addEmail(e)} class="btn btn-block mb-4 w-100" style={{background:"#7F56D9" , color: "#FFFFFF"  }}>Log in</button>
  <button type="button" class="btn btn-light btn-block mb-4 w-100">Sign in with google</button>

  
  <div class="text-center">
    <p style={{fontSize: "12px"}}>Don’t have an account? <Link to="/signup">signup</Link></p>
  </div>
</form>
</div>
</div>
<Footer/>
    </div>
  )
}

export default Login