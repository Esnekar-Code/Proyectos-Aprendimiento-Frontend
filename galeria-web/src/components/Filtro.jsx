function Filtro({ razas, razaElegida, onCambiar }) {
  return (
    <div>
      <label htmlFor="raza">Raza</label>
      <select
        id="raza"
        value={razaElegida}
        onChange={(e) => onCambiar(e.target.value)}
      >
        <option value="">Todas las razas</option>
        {razas.map((raza) => (
          <option key={raza} value={raza}>
            {raza.charAt(0).toUpperCase() + raza.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filtro