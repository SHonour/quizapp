import reset from "../assets/reset.png";


function Reset ({ resetbtn }) {
    return(
        <button 
        className="text-[#5E1010] font-bold text-[22.73px] flex  items-center justify-center bg-[#FFEE6E] rounded-4xl w-68.5 h-18"
        onClick={resetbtn}
        >
            Try again <span><img src={reset} className="w-6 h-6" alt="" /></span>
        </button>
    )
}

export default Reset;