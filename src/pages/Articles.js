import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Articles = () => {

    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-center flex-column'>
                <div className='d-flex flex-column p-5 '>
                    <div style={{
                        fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '16px', lineHeight: '24px',
                        color: '#7F56D9'
                    }} className='d-flex justify-content-center'>
                        Design
                    </div>
                    <div style={{
                        fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '250%', lineHeight: '60px',
                        color: '#101828'
                    }} className='d-flex justify-content-center'>
                        UX review presentations
                    </div>
                    <div style={{
                        fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '15px', lineHeight: '30px',
                        color: '#475467'
                    }} className='d-flex justify-content-center'>
                        How do you create your compelling presetatios that wow your collegues and impress your managers
                    </div>
                    <div style={{
                        fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '28px',
                        color: '#101828', marginTop: '2%'
                    }} className='d-flex justify-content-center'>
                        Shreyas Ranjan
                    </div>
                    <div style={{
                        fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '12px', lineHeight: '24px',
                        color: '#475467'
                    }} className='d-flex justify-content-center'>
                        01-02-2023
                    </div>
                </div>
                <div className='d-flex justify-content-center p-5' style={{ marginTop: '-5%' }}>
                    <img src="/images/testimg.jpeg" className="card-img-top img-fluid " alt="..." />
                </div>
                <div className='d-flex justify-content-center p-5' style={{
                    fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '30px',
                    color: '#475467'
                }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    { }
                </div>
            </div>   <Footer /> </div>
    )
}

export default Articles