function Tarjeta({ url }) {
  const raza = url.split('/breeds/')[1].split('/')[0]

  return (
    <figure className="tarjeta">
      <img src={url} alt={`Perro de raza ${raza}`} loading="lazy" />
      <figcaption>{raza}</figcaption>
    </figure>
  )
}

export default Tarjeta