import { useState,useRef } from "react";

const Descriptions = ({added,selectedElement,deletes,tomai}) => {

const Task = useRef();
const [task,setTask] = useState([]);
const [n1,setn1] = useState(0);

  const selected = added.find(element => element.id ===  selectedElement.id);

  const todo = () => {
    setn1(elm => elm + 1);
    const variable = Task.current.value;
    setTask(elements => [...elements,{Task:variable,id:n1}]);
  }

  function Delete(ids){
    setTask(elements =>{
      return elements.filter(elementx => elementx.id !== ids)
    })
    
  }

  return (
    <div className="min-h-Modal min-w-modal border border-zinc-800 flex flex-col gap-6 px-12 py-12 ">
              
        { 
        selected &&
        <div className="flex flex-col gap-20">
           
<div className="flex justify-between border-b border-zinc-800 leading-10">

<div>
    <h1 className="text-3xl font-semibold">{selected.Title}</h1>
    <p>{selected.Due}</p>
        <div>
          {selected.Description}
        </div>
        <div/>
</div>

        <button onClick={()=>{
          deletes(selected.id)
          tomai("main")
        }}>Delete</button>

</div>

{/*/////Lower Part///////////*/}

   <div className="flex flex-col gap-10">
    <div>
    <h1 className="text-2xl font-semibold">Task</h1>
       <input type="text" ref={Task} className="min-h-8 border-b border-neutral-700 px-1.5" /><span style={{marginLeft:'50px',cursor:"pointer"}} onClick={todo}>Add Task</span>
    </div>

<div className="flex flex-col gap-3 ">
{
      task.map((elements,index)=>{
        return(
          <div key={elements.id} className="max-w-md border-b border-slate-600 flex justify-between gap-5">
            <h1>{elements.Task}</h1>
            <span style={{cursor:"pointer"}} onClick={()=>Delete(elements.id)}>Delete</span>
            </div>
        )
      })
    }
</div>
  
      
   </div>



          </div>
        

        }
           
        
          
    </div>
  )
}

export default Descriptions