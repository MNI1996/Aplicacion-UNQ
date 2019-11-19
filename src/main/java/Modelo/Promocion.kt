package Modelo

import javax.persistence.*

@Entity
class Promocion(var cantidadMinima: Int,
                var precioPromocion: Double) {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    var id:Long = 0

}
