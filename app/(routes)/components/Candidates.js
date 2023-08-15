
const Candidates = ({ name, votes, }) => {
  return (
    <div className="p-3  shadow-lg lg:w-[30%] w-[40%] h-48 shadow-slate-400 text-center">
        <i className="fa-solid fa-user text-[4rem]"></i>
        <p className="font-semibold">{name}</p>
        <p>Votes:</p>
        <p className="font-bold text-[1.5rem]">{votes}</p>

    </div>
  )
}

export default Candidates;