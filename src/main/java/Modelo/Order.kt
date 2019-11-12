package Modelo
import main.java.GeoCalculator
import java.time.LocalDate
import Modelo.Menu
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


class Order ( var date: LocalDate, var user: String, var provider: Provider,
             var listMennus: MutableList<Menu>, var state: String, var precioTotal: Double
             ) {
    var code= Math.random()
    val geoCalculator = GeoCalculator

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    var id:Long = 0

    fun mennuesValidation(): Boolean{
        return listMennus.isNotEmpty()
    }

/*    fun restoValidation(): Boolean {
        return provider.ubication.distancia(user.ubication) <= 20
    }*/


}