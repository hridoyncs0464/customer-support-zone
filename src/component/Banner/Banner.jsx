import React from 'react';
import bannerImg from '../../assets/vector1.png'

const Banner = () => {
    return (
        <div className='parentDiv flex justify-between items-center gap-[15px] '>
          
            <div style={{ background: 'linear-gradient(90deg, #632EE3 0%, #9F62F2 100%)' }} className="leftDiv grid grid-cols-3 justify-center items-center rounded-[8px]">
            <img src={bannerImg} alt="" />
             <div className='text-center '>
                <p className='text-[1.5rem]  text-[#FFFFFF]'>In-Progress</p>
             <h3 className='text-white text-[3.75rem] font-semibold'>0</h3>

             </div>
                   <img src={bannerImg} alt="" />
            </div>



              <div style={{ background: 'linear-gradient(90deg, #54CF68 0%, #00827A 100%)' }} className="rightDiv grid grid-cols-3 justify-center items-center rounded-[8px]">
            <img src={bannerImg} alt="" />
             <div className='text-center '>
                <p className='text-[1.5rem]  text-[#FFFFFF]'>Resolved</p>
             <h3 className='text-white text-[3.75rem] font-semibold'>0</h3>

             </div>
                   <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;