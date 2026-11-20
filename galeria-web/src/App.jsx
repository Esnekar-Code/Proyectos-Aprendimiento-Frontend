import { useState, useEffect } from 'react'
import Galeria from './components/Galeria'
import Mensaje from './components/Mensaje'
import Filtro from './components/Filtro'

function App() {
  const [imagenes, setImagenes] = useState([])
  const [razas, setRazas] = useState([])
  const [razaElegida, setRazaElegida] = useState('')
  const [cargando, setCargando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [error, setError] = useState(null)

  // Trae 50 imágenes al abrir y cada vez que cambia la raza
  useEffect(() => {
    const controlador = new AbortController()

    async function cargarImagenes() {
      setCargando(true)
      setError(null)
      try {
        const url = razaElegida
          ? `https://dog.ceo/api/breed/${razaElegida}/images/random/50`
          : 'https://dog.ceo/api/breeds/image/random/50'
        const respuesta = await fetch(url, { signal: controlador.signal })
        if (!respuesta.ok) throw new Error('No se pudo conectar con la API')
        const datos = await respuesta.json()
        if (datos.status !== 'success') throw new Error('La API devolvió un error')
        setImagenes(datos.message)
      } catch (err) {
        if (err.name === 'AbortError') return
        setError('No se pudieron cargar las imágenes. Revisa tu conexión.')
      } finally {
        if (!controlador.signal.aborted) setCargando(false)
      }
    }

    cargarImagenes()

    return () => controlador.abort()
  }, [razaElegida])

  // Trae la lista de razas una sola vez
  useEffect(() => {
    const controlador = new AbortController()

    async function cargarRazas() {
      try {
        const respuesta = await fetch(
          'https://dog.ceo/api/breeds/list/all',
          { signal: controlador.signal }
        )
        if (!respuesta.ok) throw new Error('No se pudieron cargar las razas')
        const datos = await respuesta.json()
        if (datos.status !== 'success') throw new Error('La API devolvió un error')
        setRazas(Object.keys(datos.message).sort())
      } catch (err) {
        if (err.name === 'AbortError') return
        // No mostramos error aquí para no pisar el de las imágenes
      }
    }

    cargarRazas()

    return () => controlador.abort()
  }, [])

  // Agrega 5 imágenes más sin repetir
  async function traerMas() {
    setCargandoMas(true)
    setError(null)
    try {
      const url = razaElegida
        ? `https://dog.ceo/api/breed/${razaElegida}/images/random/5`
        : 'https://dog.ceo/api/breeds/image/random/5'
      const respuesta = await fetch(url)
      if (!respuesta.ok) throw new Error('No se pudo conectar con la API')
      const datos = await respuesta.json()
      if (datos.status !== 'success') throw new Error('La API devolvió un error')
      setImagenes((actuales) => {
        const nuevas = datos.message.filter((u) => !actuales.includes(u))
        return [...actuales, ...nuevas]
      })
    } catch (err) {
      setError('No se pudieron traer más imágenes. Revisa tu conexión.')
    } finally {
      setCargandoMas(false)
    }
  }

  return (
    <main>
      <h1>Galería de perros</h1>
      <Filtro razas={razas} razaElegida={razaElegida} onCambiar={setRazaElegida} />
      <p>{imagenes.length} imágenes · raza: {razaElegida || 'Todas'}</p>
      {cargando && <Mensaje tipo="carga" texto="Cargando imágenes..." />}
      {error && (
        <>
        <Mensaje tipo="error" texto={error}>
          <button
            className="btn-reintentar"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </Mensaje>
        </>
      )}
      <Galeria imagenes={imagenes} />
      <button onClick={traerMas} disabled={cargandoMas}>
        Traer 5 imágenes
      </button>
    </main>
  )
}

export default App