
import { useParams } from 'react-router-dom';

export const CitasDetalle = () => {
   const { id } = useParams();
  return (
     <main className="container">
      <section>

        <h1>Detalle de la Cita</h1>

        <article>

          <h2>Consulta Médica</h2>

          <p><strong>ID:</strong> {id}</p>

          <p><strong>Fecha:</strong> 15/07/2026</p>

          <p><strong>Hora:</strong> 10:00 AM</p>

          <p><strong>Lugar:</strong> Clínica Central</p>

          <p>
            <strong>Descripción:</strong> Consulta médica de seguimiento.
          </p>

        </article>

      </section>
    </main>
  )
}

