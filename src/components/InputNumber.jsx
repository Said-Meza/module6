import { useState } from "react"


export const InputNumber = ({setNumberin}) => {
    const [number, setnumber] = useState('')

    const handleonclick= () => {
        setNumberin(number)
        setnumber("")
    }

  return (
    <>
    
        <input type="text" onChange={(e)=>{setnumber(parseInt(e.target.value))}} value={number}  />
        <button onClick={handleonclick}>analizar respuesta</button>
    </>
  )
}
