function NextButton ({ goToNext, showFeedback, nextDisabled }) {
    return(
    <button 
    onClick={goToNext} 
    disabled={nextDisabled}
    
    className={`w-84.5 h-16.75 border border-[#DAD4D4] rounded-4xl cursor-pointer hover:scale-105 mt-31.75 ${showFeedback? "bg-[#4E1A1A]" : "bg-[#DAD4D4]"} text-white text-bold`}
    >Next Question</button>
    )
}

export default NextButton;