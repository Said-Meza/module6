

export const Citas = () => {
  return (
    <main className="container">
      <section>
        <h1>Listado de Citas</h1>

        <p>
          En esta sección podrás visualizar todas las citas registradas.
          Selecciona una para consultar sus detalles.
        </p>

        <div className="lista-citas">

          <a href="/citas/2" className="cita">
            <h3>Consulta Médica</h3>
            <p>Fecha: 15/07/2026</p>
            <p>Hora: 10:00 AM</p>
          </a>

          <article className="cita">
            <h3>Reunión de Trabajo</h3>
            <p>Fecha: 18/07/2026</p>
            <p>Hora: 03:30 PM</p>
          </article>

        </div>
      </section>
    </main>
  )
}
