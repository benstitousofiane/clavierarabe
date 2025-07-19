import { ReactNode } from "react"
import ArabKey from "./ArabKey"

interface ArabKeyboardInterface{
    inputValue : string
    setInputValue : Function
}

export default function ArabKeyboard(prop: ArabKeyboardInterface){
    const letters1 : string = "ا ب ت ث ج ح خ د ذ ر ز س ش"
    const letters2 : string = "ص ض ط ظ ع غ ف ق ك ل م ن ه و ي"
    const hamzas : string = "ٱ آ أ إ ؤ ئ ء"
    const tashkeels : string = "◌َ ◌ً ◌ِ ◌ٍ ◌ُ ◌ٌ ◌ّ ◌ْ"
    const others : string = "ـ ى ة"
    const dots : string = ". ، ؛ ؟"
    const numbers : string = "٩ ٨ ٧ ٦ ٥ ٤ ٣ ٢ ١ ٠"
    const numbersDots : string = "٪ ٫"

    function keysMaking(chars : string){
        let array : ReactNode[] = []
        chars.split(" ").forEach((letter) => {
            array.push(<ArabKey letter={letter} inputValue={prop.inputValue} setInputValue={prop.setInputValue}></ArabKey>)
        })

        return (
            <div className="flex flex-row-reverse gap-2">
                {array}
            </div>

        ) 
    }
    


    return (
        <div className="flex flex-col gap-2 mb-2">
            {keysMaking(letters1)}
            {keysMaking(letters2)}
            {keysMaking(hamzas)}
            {keysMaking(tashkeels)}
            {keysMaking(others)}
            {keysMaking(dots)}
            {keysMaking(numbers)}
            {keysMaking(numbersDots)}
        </div>
    )
}