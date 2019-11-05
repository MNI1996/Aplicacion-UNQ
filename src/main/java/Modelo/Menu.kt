

import Modelo.Enums.Categoria
import Modelo.Enums.Horarios
import Modelo.Enums.MedidorDelLapso
import jdk.nashorn.internal.ir.annotations.Ignore
import java.time.LocalDate
import javax.persistence.*
import javax.validation.constraints.Null
import kotlin.jvm.Transient


//@Enumerated(STRING)

class Menu (
        var name: String="",

        var description: String="",

        @Enumerated(EnumType.STRING)
        var categoria: Categoria=Categoria.Cerveza,

        var valorDelivery: Int=0,

        @Transient
        var duracionMenu: Fecha=Fecha(12,12,12),

        @Enumerated(EnumType.STRING)
        var horarios: Horarios=Horarios.Afternoon,

        @Transient
        var tiempoEspera: TimeLapsus=TimeLapsus(12,MedidorDelLapso.Minutes),

        var precio: Double=0.0,

        @Transient
        var primeraPromocion: Promocion=Promocion(1,0.0),

        @Transient
        var segundaPromocion: Promocion?=null,

        var stock:Int=0,

        var enabled: Boolean=true
           ) {
    @Id @GeneratedValue(strategy=GenerationType.AUTO)
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
        var hoy=LocalDate.now()
       return( hoy.year <= duracionMenu.year
               && hoy.monthValue >= duracionMenu.month
               && hoy.dayOfMonth >= duracionMenu.day
               )
    }

}