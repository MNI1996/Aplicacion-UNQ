package Modelo

import org.json.simple.JSONObject
import javax.persistence.*

@Entity
class ClientUser (var name: String,
                  var mail: String,
                  var telefono: String?)
{
    @ManyToOne(targetEntity=DatosComprador::class,cascade = [(CascadeType.ALL)])
    var datosComprador: DatosComprador? = null
    @ManyToOne(targetEntity=Provider::class)
    var datosProvider: Provider? = null
    var saldo=0.00
    @ElementCollection
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
    fun DatosClienteJson(){

    }


}