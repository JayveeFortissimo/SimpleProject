import Image from '../../assets/NoteBook.jpg';

const MainMods = ({Modal1 = "div",...props}) => {
  return (
    <Modal1  className="min-h-Modal min-w-modal border border-zinc-800 flex flex-col items-center justify-center gap-6">
        <img src={Image} alt="" style={{height:"10rem"}}/>
        <h1 className="text-stone-800 text-2xl">No Project Selected</h1>
        <p className="text-stone-700">Select a project or get started with a new one</p>
        <button {...props} className="bg-zinc-800 py-2 px-2 rounded-t-md rounded-b-md text-amber-400">Create new project</button>
    </Modal1>
  )
}

export default MainMods