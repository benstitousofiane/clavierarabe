interface ArabKeyInterface{
    letter : string
    inputValue : string
    setInputValue : Function
}
export default function ArabKey(prop:ArabKeyInterface){
    return (
        <div>
            <button
            className="bg-black text-white p-3 px-4 text-6xl rounded-lg font-mono"
            onClick={() => {prop.setInputValue(prop.inputValue + prop.letter[prop.letter.length - 1])}}>
                {prop.letter}
            </button>
        </div>
    )
}