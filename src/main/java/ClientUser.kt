package main.java

import Pedido.Order
import Resto.Provider
import java.time.LocalDate

class ClientUser (var name: String, password: String, var mail: String,var telefono: Int, var localidad: String,var direccion: String, var history: MutableList<Order> ) {


    fun doOrder(resto: Provider, listMennu: MutableList<Menu>, payment: String){
        var newOrder = Order(resto.giveNewCodeOrder(), LocalDate.now(), this, resto, listMennu, "Pendiente", payment, resto.ubication)

        if(newOrder.mennuesValidation()){
            addOrder(newOrder)
            resto.menus.removeAll(listMennu)//el resto siempre va a tener stock (ver enunciado)
        } else{
            throw Exception("El pedido realizado es invalido")
        }
    }

    fun addOrder(order: Order){
        //se annade independientemente del estado del pedido
        history.add(order)
    }

    fun cancelOrder(order: Order){
        //Prec.: order debe ser una orden hecha por this (order debe estar en el historial)
        if (order.state.toUpperCase() != "ENTREGADO" ){
            history.filter { o -> o.code == order.code }[0].state = "Cancelado"
        } else{
            throw Exception("Su pedido no puede ser cancelado ya que el estado de su pedido es ${order.state}")
        }

    }

}