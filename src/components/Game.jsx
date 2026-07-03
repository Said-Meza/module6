import { useState } from "react"
import { InputNumber } from "./InputNumber"
import { Massage } from "./Massage"

export const Game = () => {
  function generarNumeroRandom() {
    return Math.floor(Math.random() * 100) + 1;
}
    const [numberrandom, setNumberrandom] = useState( generarNumeroRandom())
    const [numberin, setNumberin] = useState('')
    const [estado, setEstado] = useState(false)
    
    let mayor = "";

    if (numberin !== "") {

    if (Number(numberin) > numberrandom) {
        mayor = "Ingresa un número menor";
    } else if (Number(numberin) < numberrandom) {
        mayor = "Ingresa un número mayor";
    }
}

  return (
    <>
    <div> Encuentra el Numero </div>
    
    <InputNumber setNumberin={setNumberin} / >

   <Massage
    estado={numberin === numberrandom}
    mayor={mayor}
    />
    </>


  )
}
