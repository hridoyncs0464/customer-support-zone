import React, { use } from 'react';


import calender from '../../assets/Vector.png'
import TaskStatus from '../Task-Status/TaskStatus';
import ResolvedTask from '../ResolvedTask/ResolvedTask';

const Tickts = ({TicktsLoadingPromise,onCardClick,onComplete ,selectedTask,resolvedTasks,handleRemoveResolved}) => {

     const ticktsData = use(TicktsLoadingPromise)
     console.log(ticktsData);

    return (

<div className='max-w-[1200px] mx-auto flex sm:flex-row flex-col  justify-between mt-[80px]  gap-[10px]'>
        
       <div className='left'>
             <h3 className='font-semibold text-[1.5rem] '>Customer Tickets</h3>
             <div className='max-w-[1200px] mx-auto grid sm:grid-cols-2 grid-cols-1 sm:gap-[24px] gap-[10px] sm:p-[10px] p-[10px]'>
            
            {

            ticktsData.map(tickt =>

             <div key={tickt.id}  onClick={ () => onCardClick(tickt)} className="card  bg-base-100 card-xs shadow-sm">
  <div className="card-body">


       <div className='flex justify-between'>
         <h2 className="card-title">{tickt.title}</h2>
 
  
 {tickt.status === 'In-Progress' ? (
          <button className='bg-yellow-100 text-yellow-700 px-3 py-1 rounded-2xl mx-[10px] flex items-center'>
            
            <span className="ml-1">{tickt.status}</span>
          </button>
        ) : tickt.status === 'Open' ? (
          <button className='bg-green-200 text-green-700 px-3 py-1 rounded-2xl mx-[10px] flex items-center'>
            <span className="ml-1"><span className='pr-[5px]'><div aria-label="success" className="status status-success"></div>
</span>{tickt.status}</span>
          </button>
        ) : (
          <button className='bg-yellow-100 text-yellow-200-700 px-3 py-1 rounded-2xl mx-[10px] flex items-center'>
            <span className="ml-1"><span className='pr-[4px]'><div aria-label="warning" className="status status-warning bg-amber-300"></div>
</span>{tickt.status}</span>
          </button>
        )}

         {/* <button className='bg-[#B9F8CF] px-[5px] rounded-4xl  py-[4px] text-[#0B5E06] mx-[10px]'><span><div aria-label="success" className="status mr-1 status-success bg-[#02A53B]"></div>
</span>{tickt.status}</button> */}





       </div>
    <p className='text-[#627382] text-[1rem] '>{tickt.description}</p>
    <div className="flex justify-between items-center">
          <div className='flex justify-evenly items-center space-x-1'>
            <p className='text-[#627382] text-[1rem] '>#<span>{tickt.id}</span></p>




            <p className='text-[#F83044] text-[0.875rem] font-medium'><span>{tickt.priority}</span> PRIORITY</p>
          </div>

           <div className='flex justify-evenly items-center space-x-1'>
            <p className='text-[#627382] text-[1rem] mr-[5px] '>{tickt.customer}</p>
            <img src={calender} alt="" />
            <p className='text-[#627382] text-[1rem] font-medium'>{tickt.createdAt}</p>
          </div>

    </div>
  </div>
</div>
)


            }




             </div>

       </div>

        <div className='max-w-[1200px] mx-auto  mb-[10px] '>
         
     <TaskStatus onComplete={onComplete} selectedTask={selectedTask}></TaskStatus>

       <ResolvedTask  resolvedTasks={resolvedTasks} handleRemoveResolved={handleRemoveResolved}   ></ResolvedTask>

        </div>



        </div>
      
    );
};

export default Tickts; 