
import Modelo.AppModel
import Modelo.Menu

class ClientUser (var name: String, password: String, var mail: String,var telefono: Int,
                  var localidad: String,var direccion: String ) {
    var saldo=0.00
    var history= emptyList<Order>().toMutableList()


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