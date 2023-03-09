
import Card from './Card'
import React, { useState } from 'react'


const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        comidaFavorita: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 3 && user.nombre !== ''){
            setShow(true)
            setErr(false)
        } else {
            setShow(false)
            setErr(true)
        }

        if(user.comidaFavorita.length > 6 && user.comidaFavorita !== ''){
            setShow(true)
            setErr(false)
        } else {
            setShow(false)
            setErr(true)
        }
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre Completo</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Comida Favorita</label>
            <input type="text" value={user.comidaFavorita} onChange={(e) => setUser({...user, comidaFavorita: e.target.value})}/>
            
            <button>Enviar</button>
            



        </form>
        {err ? 'Por favor chequea que la información sea correcta' : null}
        {show && <Card nombre={user.nombre} comidaFavorita={user.comidaFavorita}/>}
        
    </div>
  )
}

export default Form