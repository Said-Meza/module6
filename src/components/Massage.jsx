
export const Massage = ({estado, mayor}) => {

  return (
    <>
    {estado ? 
               (<><h1> Numeroo encontrado</h1><br/> <h2>felicidades encontrastes el numero</h2></>)
               :
                <h1> Numero equivocado</h1>}
    <h1>{ mayor }</h1>
    </>
  )
}
