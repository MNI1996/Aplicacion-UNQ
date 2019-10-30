

import Enums.Categoria
import Enums.Horarios
import java.time.LocalDate
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Menu (
            var name: String,
            var description: String,
            var categoria: Categoria,
            var valorDelivery: Int,
            var duracionMenu: Fecha,
            var horarios: Horarios,
            var tiempoEspera: TimeLapsus,
            var precio: Double,
            var primeraPromocion: Promocion,
            var segundaPromocion: Promocion?,
            var stock:Int,
            var enabled: Boolean
           ) {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    var id:Int = 0


    fun calculatedPrice(cantidad: Int): Double {
        var totalPrice = when{
            segundaPromocion != null && cantidad > segundaPromocion!!.cantidadMinima-> cantidad*segundaPromocion!!.precioPromocion
            cantidad >= primeraPromocion.cantidadMinima -> primeraPromocion.precioPromocion * cantidad
            else -> precio * cantidad
        }

        return totalPrice + valorDelivery
    }

    fun itsOver():Boolean{
        var hoy=LocalDate.now()
       return( hoy.year <= duracionMenu.year
               && hoy.monthValue >= duracionMenu.month
               && hoy.dayOfMonth >= duracionMenu.day
               )
    }

}