

const Side = ({Side="aside",Create,added,setSelectedElement,...props}) => {


  return (
    <Side {...props}>
      <h1>Your Projects</h1>
      <button onClick={()=> Create("Set")}>Add +</button>

      <div className="min-h-10 min-w-full flex flex-col items-center gap-3">
         {
          added.map((elements,index)=>{
            console.log(elements.id)
            return(
              <div key={index}>
                <div  style={{cursor:"pointer"}} onClick={()=>{
                  setSelectedElement(elements)
                  Create("Description");
                  console.log("Button index" + index)
                }}>
                <h1 >{elements.Title}</h1>
                </div>
                </div>
            )
          })
          
         }
      </div>
    </Side>
  )
}

export default Side