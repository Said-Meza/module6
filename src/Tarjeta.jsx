

export const Tarjeta = () => {

    const nombre = "Said Meza";
    const profesion = "Desarrollador Web";
    const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  return (
     <div style={{  border: '1px solid #ccc', 
                    padding: '20px', 
                    width: '300px', 
                    textAlign: 'center'
                 }}>
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
    

  );
}
