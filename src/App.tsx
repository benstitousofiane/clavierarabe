import './index.css'
import ArabKeyboard from './components/keyboard/ArabKeyboard'
import ArabInput from './components/Input/ArabInput'

import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <div className='flex flex-col items-center h-screen'>
        <ArabInput setInputValue={setInputValue} inputValue={inputValue}></ArabInput>
        <ArabKeyboard inputValue={inputValue} setInputValue={setInputValue}></ArabKeyboard>
      </div>
    </>
  )
}

export default App
