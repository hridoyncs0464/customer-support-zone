
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Tickts from './component/Tickts/Tickts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchTickts = async () => {

  const res = await fetch('/data.json')
  return res.json()
}
 
   const TicktsLoadingPromise = fetchTickts();

function App() {
  const [inProgressCount,setProgressCount] = useState(0)
   const [selectedTask,setSelectedTask]  = useState([]) 
    const [resolvedCount, setResolvedCount] =  useState(0);
    
   const [resolvedTasks,setResolvedTasks] = useState([]);
    
    const handleComplete = (task) =>{
      setResolvedCount (count => count + 1);
    setProgressCount(count => count-1);

      setSelectedTask(prev => prev.filter(t => t.id !== task.id));

      setResolvedTasks(prev => [...prev,task]);
      //  setTickets(prev => prev.filter(t => t.id !== task.id));
        toast.success('Completed!');
    };

   const handleCardClick = (tickObj)  => {
    setSelectedTask(prev => {

      const ids = new Set(prev.map(t => t.id));

      if(ids.has(tickObj.id)){
        return prev;}
    
      setProgressCount(count => count+1);
        return [...prev,tickObj];
    });
    
   
toast.success('In Progress!');   };

    const handleRemoveResolved = (task) =>{
            setResolvedCount (count => count - 1);
            setResolvedTasks(prev => prev.filter(t =>t.id !== task.id));

toast.success('Removed!');
    }

  return (
    <>
      <Navbar></Navbar>
      <Banner resolvedCount={resolvedCount} inProgressCount={inProgressCount}></Banner>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>

      <Tickts
       onComplete={handleComplete}
        selectedTask={selectedTask} 
         TicktsLoadingPromise={TicktsLoadingPromise} 
         onCardClick={handleCardClick}
           resolvedTasks={resolvedTasks}
          handleRemoveResolved={handleRemoveResolved}
         ></Tickts>
      
      </Suspense>
 
      <Footer></Footer>
             <ToastContainer position="top-right" autoClose={3000} />

    </>
  )
}

export default App
