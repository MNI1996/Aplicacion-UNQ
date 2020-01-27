package Modelo
import main.java.GeoCalculator
import java.time.LocalDate
import Modelo.Menu
import org.joda.time.DateTime
import javax.persistence.*

@Entity
@Table (name = "MenuOrder")
class Order (
        var date: DateTime,
        var user: String,
        @ManyToOne(targetEntity=Provider::class)
        var provider: Provider,
        @ElementCollection
        var listMennus: MutableList<Menu>,
        var state: String,
        var precioTotal: Double
             ) {
    var puntuacion=0
    var code= Math.random()
    @Transient
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