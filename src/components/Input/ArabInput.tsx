import "../../index.css"

interface ArabInputInterface{
    inputValue : string
    setInputValue : Function
}

export default function ArabInput(prop : ArabInputInterface){
    return (
        <textarea dir="rtl" onChange={(event) => {prop.setInputValue(event.target.value)}}
        className="customScrollBar bg-black w-screen h-[50%] text-[70px] caret-neutral-500 text-white mb-5 p-6 outline-0 resize-none shadow-xl text-right font-serif"
        value={prop.inputValue}>
        
        </textarea>
    )
}