import React from 'react';
import socialLink1 from '../../assets/fi_5969020.png'

import socaial2 from '../../assets/fi_145807.png'
import social3 from '../../assets/fi_5968764.png'
import scioal4 from '../../assets/fi_6244710.png'
const Footer = () => {
    return (
        <div className='mt-[80px]'>
            <footer className="footer sm:footer-horizontal bg-[#000000] text-neutral-content p-10">
     <div className='w-[350px] h-full'>
        <h3 className='font-bold text-[1.5rem]'>CS — Ticket System</h3>
        <p className='text-[#A1A1AA] text-[1rem] mt-[15px]'>Ticket is a widely used and trusted open source support ticketing system. Easily scale and streamline your customer service and drastically improve your customer's experience.</p>
     </div>
        

     <nav>
    <h6 className="footer-title text-[#FFFFFF]">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saled</a>
  </nav>    
  <nav>
    <h6 className="footer-title text-[#FFFFFF]">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
  </nav>
  <nav>
    <h6 className="footer-title text-[#FFFFFF]">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
 
  <nav>
    <h6 className="footer-title text-[#FFFFFF]">Social Links</h6>
    <a className="link link-hover"> 
       <div className='flex'>
         <img src={socialLink1} alt="" />
         <p>@CS — Ticket System</p> </div> </a>

 <a className="link link-hover"> 
       <div className='flex'>
         <img src={socaial2} alt="" />
         <p>@CS — Ticket System</p> </div> </a>
          <a className="link link-hover"> 
       <div className='flex'>
         <img src={social3} alt="" />
         <p>@CS — Ticket System</p> </div> </a>
          <a className="link link-hover"> 
       <div className='flex'>
         <img src={scioal4} alt="" />
         <p>@CS — Ticket System</p> </div> </a>

  </nav>
  
</footer>
<footer className="footer sm:footer-horizontal footer-center bg-[#000000] text-[#FAFAFA] p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;