

const Set = ({close,toInput,save}) => {
  return (
    <div className="min-h-Modal min-w-modal border border-zinc-800 flex flex-col gap-6 px-12 py-12">
       <div className="flex justify-end gap-5">
        <button onClick={()=>close("main")}>Cancel</button>
        <button onClick={(e)=>{
          e.preventDefault();
            save();
            close("main");
        }}  className="bg-zinc-800 py-2 px-2 rounded-t-md rounded-b-md text-amber-400">Save</button>
       </div>
           
           <div className="flex flex-col gap-3">
            <h1>TITLE</h1>
            <input type="text" className="min-h-8 border-b border-neutral-700 px-1.5"  onChange={(e)=>toInput("Title",e.target.value)}/>
            <h1>Description</h1>
            <textarea name="Area" id="" className="border-b border-neutral-700 px-1.5"  onChange={(e)=>toInput("Description",e.target.value)}>
                
            </textarea>
            <h1>DUE DATE</h1>
            <input type="date" className="border-b border-neutral-700 px-1.5"  onChange={(e)=>toInput("Due",e.target.value)}/>
          
           </div>

    </div>
  )
}

export default Set