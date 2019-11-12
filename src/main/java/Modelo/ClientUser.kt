package Modelo
import Modelo.AppModel
import Modelo.Menu
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

class ClientUser (var name: String, password: String, var mail: String,var telefono: Int,
                  var localidad: String,var direccion: String ) {
    var saldo=0.00
    var history= emptyList<Order>().toMutableList()

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    var id:Long = 0
    fun doOrder(provedor: Provider, listMenu: MutableList<Pair<Int,Menu>>){
     AppModel().generateOrder(listMenu,this,provedor)
    }

    fun addOrder(order: Order){
        history.add(order)
    }

    fun recargar(i: Double) {
        saldo += i
    }

}