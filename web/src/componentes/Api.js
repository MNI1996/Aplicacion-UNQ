
import fetch from 'node-fetch'

class Api {
    url = "http://localhost:3000"
    
    obtenerEspacios(){
        const url = new URL('/Espacio/obtenerEspacios', urlBase).toString()

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({id: idEspacio}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(({ Plantas }) => Plantas)
    }
}
export default Api