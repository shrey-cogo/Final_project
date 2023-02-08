import { useRef, useState } from "react"
import React  from 'react'
import { v4 as uuid } from "uuid";


const Header = () => {
    const subsemailRef  = useRef();
    const [subsEmail , setSubsemail]=useState("");
    const [subsTotalEmail , setSubTotalsemail]=useState([]);

    const subscribe=(e)=>{
        setSubsemail(subsemailRef.current.value);
        setSubTotalsemail(prev=> [...prev,{id: uuid() ,email:subsemailRef.current.value}])
        // console.log(subsEmail);
        // console.log(subsTotalEmail);
    }
    return (
        // <div>
        //     <div className='container'>
        //         <div className='content' >
        //             <div className='heading-and-supporting-text' >
        //                 <div className='heading-subheading' >
        //                     <div className='subheading'>
        //                         Resources
        //                     </div>
        //                     <div className='heading'>
        //                         Untitled blog
        //                     </div>
        //                 </div>
        //                 <div className='supporting-text'>
        //                     Tool and strategies modern teams need to help their companies grow.
        //                 </div>
        //             </div>
        //             <div className='email-capture'>
        //                 <div>
        //                     <input type="text"  placeholder='Enter email' ref={subsemailRef}/>
        //                     <button type="submit" onClick={(e)=>subscribe(e)}>Get started</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
            <div style={{height:'300%',padding:'7%',background: '#F9FAFB'}}>
       <div className='container-fluid '>
           <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',lineHeight: '20px',
             color: '#7F56D9'}} className='p-1'>
               Resources
           </div>
           <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '200%',lineHeight: '60px',
             color: '#101828'}}  className='p-1'>
            Untitled blog
           </div>
           <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '400',fontSize: '20px',lineHeight: '30px',
             color: '#475467'}} className='p-2'>
               Tool and strategies modern teams need to help their companies grow.
           </div>
           <div className='row p-2'>
                <div className='col-lg-4'>
                    <input ref={subsemailRef} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/> 
                    <label for="exampleFormControlInput1" class="form-label" style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '20px',
             color: '#101828'}}>We care about your data in our <u>privacy policy</u> </label>
                </div>
                <div className='col-lg-2'>
                <button onClick={(e)=>subscribe(e)} type="submit" class="btn btn-primary " style={{width:'100%',background:'#7F56D9'}}>Get Started</button>
                </div>
           </div>
       </div>
    </div>
    );
}

export default Header