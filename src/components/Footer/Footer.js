/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import Link from 'next/link'
import { appName } from '../../Api/FetcherApi'
import ApplicationLogo from '../ApplicationLogo'

const Footer = () => {
    return (
        <footer className="padding textc-2" >
            <hr className=' borderc-4'/>
            <div className='row' >
                <div className='col m50 padding' >
                    <h2 className=' xxlarge textc-4'><ApplicationLogo/></h2>
                </div>
                <div className='col m50 user-select padding' >
                    <h2 className="textc-4 xlarge" >تواصل معنا :</h2>
                    <a href='https://wa.me/+963943435682' target='_blank' className="textc-2 hover-textc-4 large text-decoration-none display-block margin-top" style={{direction:'ltr'}} >+963943435682</a>
                    <a href='mailto:ammarqassab1997@gmail.com' target='_blank' className="textc-2 hover-textc-4 large text-decoration-none display-block margin-top"  style={{direction:'ltr'}}>ammarqassab1997@gmail.com</a>
                    {/* <Link href="/blog/next/mdxpage"><a className='textc-2 hover-textc-4 large text-decoration-none display-block margin-top'>MDX Page</a></Link> */}
                </div>
                <div className='col s100' >
                    {/* <hr className=' borderc-4'/> */}
                </div>
                <div className='col m50 padding' >
                    <h2 className='textc-4 xlarge'>حول موقعنا :</h2>
                    <p className=' large'>نحن شركة مهتمة بتعليم البرمجة و تطوير مواقع الويب وتطبيقات الهاتف المحمول لجذب علامتك التجارية و لزيادة من إراداتك .</p>
                </div>
                <div className='col m50 padding margin-top display-container' >
                    <div className="row-padding display-middle width-100 center">
                        <div className="col s25 xxlarge" ><a href='https://wa.me/+963943435682' target='_blank' className="fab fa-facebook-f hover-textc-4 text-decoration-none" style={{color:"#0070b1"}}></a></div>
                        <div className="col s25 xxlarge" ><a href='https://wa.me/+963943435682' target='_blank' className="fab fa-whatsapp hover-textc-4 text-decoration-none"  style={{color:"#2de92d"}}></a></div>
                        <div className="col s25 xxlarge" ><a href='https://wa.me/+963943435682' target='_blank' className="fab fa-github hover-textc-4 text-decoration-none" ></a></div>
                        <div className="col s25 xxlarge" ><a href='https://wa.me/+963943435682' target='_blank' className="fab fa-linkedin hover-textc-4 text-decoration-none"  style={{color:"#39c7da"}}></a></div>
                    </div>
                    {/* <div className="row-padding center margin-top" >
                        <div className="col s25 hover-textc-4 xxlarge" ><span className="fab fa-cc-visa" ></span></div>
                        <div className="col s25 hover-textc-4 xxlarge" ><span className="fab fa-cc-amazon-pay" ></span></div>
                        <div className="col s25 hover-textc-4 xxlarge" ><span className="fab fa-cc-paypal" ></span></div>
                        <div className="col s25 hover-textc-4 xxlarge" ><span className="fab fa-cc-mastercard" ></span></div>
                    </div> */}
                </div>
            </div>
            <hr className=' borderc-4'/>
            <div className='large center'>حقوق الطبع و النشر لسنة © 2022 جميع الحقوق محفوظة لصالح شركة {appName}  </div>
        </footer>
)
}

export default Footer

//We are a leading software company creates innovative, effective applications that capture your brand and maximize your revenue .