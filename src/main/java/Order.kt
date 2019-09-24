package main.java



import Resto.Provider
import main.java.Menu
import main.java.ClientUser
import main.java.GeoCalculator
import main.java.Posicion
import java.time.LocalDate

class Order ( var date: LocalDate, var user: ClientUser, var provider: Provider,
             var listMennus: MutableList<Menu>, var state: String, var precioTotal: Double
             ) {
    var code= Math.random()
    val geoCalculator = GeoCalculator

    fun mennuesValidation(): Boolean{
        return listMennus.isNotEmpty()
    }

/*    fun restoValidation(): Boolean {
        return provider.ubication.distancia(user.ubication) <= 20
    }*/


}