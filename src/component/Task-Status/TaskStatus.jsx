import React from 'react';

const TaskStatus = ({selectedTask ,onComplete}) => {
    return (
        <div className='TaskStatus'>
                 <h3 className='font-semibold text-[1.5rem] text-[#34485A]'>Task Status</h3>
                 
                 {

                  selectedTask.length ===0 ?  ( <p className='text-[#627382] text-[1rem]'>Select a ticket to add to Task Status</p>) : (
                     selectedTask.map(task => (
                       
                      <div key={task.id} className="card  bg-base-100 card-xs shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{task.title}</h2>
    
    <div className="justify w-full card-actions">
 <button onClick={ () => onComplete(task)} className='btn bg-green-400 w-full text-white rounded-[8px] '>Complete</button>
    </div>
  </div>
</div>

                  ))  )

                 }

               
            </div>
    );
};

export default TaskStatus;
