package Modelo

import Fecha
import Modelo.Enums.Categoria
import Modelo.Enums.Horarios
import Promocion
import TimeLapsus
import java.time.LocalDate
import javax.persistence.*

@Entity
class Menu (
        var name: String,

        var description: String,

        @Enumerated(EnumType.STRING)
        var categoria: Categoria,

        var valorDelivery: Int,

        @Transient
        var duracionMenu: Fecha,

        @Enumerated(EnumType.STRING)
        var horarios: Horarios,

        @Transient
        var tiempoEspera: TimeLapsus,

        var precio: Double=0.0,

        @Transient
        var primeraPromocion: Promocion,

        @Transient
        var segundaPromocion: Promocion?,

        var stock:Int,

        @Transient
        var enabled: Boolean
        ) {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    var id:Long = 0

    fun calculatedPrice(cantidad: Int): Double {
        var totalPrice = when{
            segundaPromocion != null && cantidad > segundaPromocion!!.cantidadMinima-> cantidad*segundaPromocion!!.precioPromocion
            cantidad >= primeraPromocion.cantidadMinima -> primeraPromocion.precioPromocion * cantidad
            else -> precio * cantidad
        }

        return totalPrice + valorDelivery
    }

    fun itsOver():Boolean{
        var hoy= LocalDate.now()
       return( hoy.year <= duracionMenu.year
               && hoy.monthValue >= duracionMenu.month
               && hoy.dayOfMonth >= duracionMenu.day
               )
    }

}