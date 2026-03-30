function Quiz( { data, onAnswer, showFeedback, selected, current } ) {
    const {question, answers, correct} = data;

    const getButtonstyle = (answer) => {
        if (!showFeedback) {
            return "bg-white hover:bg-[#F6F3FF] hover:scale-105";
        }
        if (answer === correct) return "bg-[#21B164]";
        if(answer === selected) return "bg-[#F73737]";
       
    }

    const letters=["A", "B", "C", "D"];
    return(
        <div>

            <p className="mt-35.75 text-[22.73px] font-bold w-134.25">{current+1}.  {question}</p>
            <div className="grid gap-5 mt-4">
                {answers.map((answer, index)=>(
                    <button className={`${getButtonstyle(answer)} w-134.25 h-16.75 border border-[#726464] flex flex-row items-center text-center justify-start
                        rounded-4xl font-bold text-[22.73px] cursor-pointer pl-10`} 
                        key={index} 
                        onClick={()=> onAnswer(answer)}
                        disabled ={showFeedback}>{letters[index]}. &nbsp; {answer}
                        </button>
                ))}
            </div>
        </div>
    )

}

export default Quiz;  