import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
    <div>
      <Navbar/>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Shreyas Ranjan</span><span class="text-black-50">shreyas.ranjan@cogoport.com</span><span> </span></div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6"><label >Name</label><input type="text" class="form-control" placeholder="first name" /></div>
                <div class="col-md-6"><label >Surname</label><input type="text" class="form-control"  placeholder="surname" /></div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12"><label  >Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" /></div>
                <div class="col-md-12"><label  >Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" /></div>
                <div class="col-md-12"><label  >Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" /></div>
                <div class="col-md-12"><label  >Area</label><input type="text" class="form-control" placeholder="enter address line 2" /></div>
                <div class="col-md-12"><label  >Email ID</label><input type="text" class="form-control" placeholder="enter email id" /></div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6"><label >Country</label><input type="text" class="form-control" placeholder="country" /></div>
                <div class="col-md-6"><label >State/Region</label><input type="text" class="form-control" placeholder="state" /></div>
              </div>
              <div class="mt-5 text-center"><button class="btn profile-button" type="button" style={{background:"#7F56D9" , color: "#FFFFFF"  }}>Save Profile</button></div>
            </div>
          </div>
          <div class="col-md-4 py-5">
            <div class="p-3 py-5">
              <div class="list-group ">
                <Link to='' class="list-group-item list-group-item-action ">First article Link</Link>
                <Link to='' class="list-group-item list-group-item-action">Second article Link</Link>
                <Link to='' class="list-group-item list-group-item-action">Third article Link</Link>
                <Link to='' class="list-group-item list-group-item-action">Fourth article Link</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Profile