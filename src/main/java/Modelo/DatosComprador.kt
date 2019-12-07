package Modelo

import org.json.simple.JSONObject
import javax.persistence.*


@Entity
class DatosComprador(var localidad: String,
                     var direccion: String) {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    var id:Long = 0

}