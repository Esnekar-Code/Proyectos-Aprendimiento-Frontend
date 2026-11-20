function Mensaje({ tipo, texto, children }) {
  if (tipo === 'error') {
    return (
      <div className="mensaje mensaje-error" role="alert">
        <span className="mensaje-icono" aria-hidden="true">!</span>
        <div className="mensaje-cuerpo">
          <strong>Algo salió mal</strong>
          <p>{texto}</p>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="mensaje mensaje-carga" role="status">
      <span className="spinner" aria-hidden="true"></span>
      <span>{texto}</span>
    </div>
  )
}

export default Mensaje