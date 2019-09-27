
import java.time.LocalDate

class ClientUser (var name: String, password: String, var mail: String,var telefono: Int,
                  var localidad: String,var direccion: String ) {
    var saldo=0.00
    var history= emptyList<Order>().toMutableList()

    /*fun doOrder(provedor: Provider, listMennu: MutableList<Menu>, payment: String){
        var newOrder = Order(provedor.giveNewCodeOrder(), LocalDate.now(), this, provedor, listMennu, "Pendiente", payment, provedor.ubication)

        if(newOrder.mennuesValidation()){
            addOrder(newOrder)
            provedor.menus.removeAll(listMennu)//el resto siempre va a tener stock (ver enunciado)
        } else{
            throw Exception("El pedido realizado es invalido")
        }
    }*/

    fun addOrder(order: Order){
        //se annade independientemente del estado del pedido
        history.add(order)
    }

    fun recargar(i: Double) {
        saldo += i
    }

}