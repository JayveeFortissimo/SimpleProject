import { useState,useRef } from "react";
import ParentRoot from "./Components/ParentRoot";
import Side from "./Components/AddComponents/Side";
import MainMods from "./Components/AddComponents/MainMods";
import Set from "./Components/AddComponents/Set";
import Descriptions from "./Components/AddComponents/Descriptions";

function App() {
 
  const Container = useRef();
  const [selectedElement, setSelectedElement] = useState(null);
 const number = useRef(0);

  const [addProject,setAddProject] = useState("main");
  const create = () => setAddProject("Set");


  const [Added,setAdded] = useState([]);
  const [plans,setplans]= useState({
    Title:"",
    Description:"",
    Due:"",
    id:null
  });

function toInput(element,values){
   setplans(elements=>{
    return{
      ...elements,
      [element]:values
    }
   })
}

const save = () =>{
  setAdded(elments => [
    ...elments,
    {Title:plans.Title,
      Description:plans.Description,
      Due:plans.Due,
     id:number.current++
    }
  ])
}


function toDelete(id){
   setAdded(elements =>{
    return elements.filter(elms => elms.id !== id)
   })

}

if(addProject === "main"){
  Container.current = <MainMods onClick={create} />
}else if(addProject === "Set"){
  Container.current = <Set close={setAddProject} toInput={toInput} save={save} />
}else if(addProject === "Description"){
 Container.current = <Descriptions added={Added} selectedElement={selectedElement} deletes={toDelete} tomai={setAddProject}/>
}

  return (
    <>
    
    <ParentRoot className="min-h-parent flex justify-center items-center gap-5  flex-wrap ">
              <Side  added={Added} Create={setAddProject}  setSelectedElement={setSelectedElement} className="min-h-auto min-w-64 flex flex-col justify-center items-center px-6 py-6 bords bg-neutral-900 text-slate-100 gap-4"/>
              {Container.current}        
    </ParentRoot>
    
    </>
  )
}

export default App
