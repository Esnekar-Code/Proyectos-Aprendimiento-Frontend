import Tarjeta from './Tarjeta'

function Galeria({ imagenes }) {
  return (
    <section className="galeria">
      {imagenes.map((url) => (
        <Tarjeta key={url} url={url} />
      ))}
    </section>
  )
}

export default Galeria