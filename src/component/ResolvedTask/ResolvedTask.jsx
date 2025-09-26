import React from 'react';

const ResolvedTask = ({resolvedTasks,handleRemoveResolved}) => {
    return (
         <div className='ResolvedTask'>
        <h3 className='font-semibold text-[1.5rem] text-[#34485A] mt-[10px]'>Resolved Task</h3>
           {resolvedTasks.length === 0 ? (
             <p className='text-[#627382] text-[1rem]'>No resolved tasks yet.</p>
  ) : (
    resolvedTasks.map(task => (
    
    
<div  key={task.id} className="card mt-[10px] bg-green-100 card-xs shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{task.title}</h2>
    <div className=" card-actions flex justify-between items-center">
        <p className='text-green-400' >Completed</p>
      <button onClick={() => handleRemoveResolved(task)} className="btn  text-gray-400">Clicked to remove</button>
    </div>
  </div>
</div>
 


             ))
              )}
            </div>

    );
};

export default ResolvedTask;

