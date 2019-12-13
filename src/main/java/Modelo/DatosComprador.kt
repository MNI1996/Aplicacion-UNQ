package Modelo

import org.json.simple.JSONObject
import javax.persistence.*


@Entity
class DatosComprador(var pais: String,
                     var provincia: String,
                     var localidad: String,
                     var calle: String,
                     var numero: Int) {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    var id:Long = 0

}