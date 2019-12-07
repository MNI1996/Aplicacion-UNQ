package Modelo

import Modelo.Enums.DiasDeSemana
import Modelo.Enums.Horarios
import org.json.simple.JSONObject
import javax.persistence.*
@Entity

class Provider(var name: String,
               var logo :String,
               var localidad:String,
               var ubication: String,
               var direccion:String,
               var descripcionService:String,
               var webSite:String?,
               var mail:String,
               var telefono:Int,
               @ElementCollection(targetElement = EnumType.STRING)
               var horariosDeSemana: MutableList<Horarios>,
               @ElementCollection(targetElement = EnumType.STRING)
               var diasDeAtencion: MutableList<DiasDeSemana>,
               var rangoEntrega:Int )
{  @ElementCollection
    var menus= emptyList<Menu>().toMutableList()
    @ElementCollection
    var history= emptyList<Order>().toMutableList()


    fun addMenu (menu: Menu){
        var wat = isValidM(menu)
        if(wat){menus.add(menu)}
        else{throw Exception ("el menu no cumple con los requerimientos minimos de aceptacion")}
    }

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    var id:Long = 0

    private fun isValidM(menu: Menu): Boolean {
        return(menu.precio.toInt() != 0
                && menu.primeraPromocion.cantidadMinima >=10
                && menu.primeraPromocion.cantidadMinima <=70
                && menu.name.length>=4
                && menu.description.length>=20
                && menu.description.length<=40
                && menu.valorDelivery>=10
                && menu.valorDelivery<=40
                && menu.stock != 0
                && !(menu.itsOver())
                )

    }


    fun containsMenu(nameMenu: String): Boolean {
        return menus.filter { m-> m.name.toUpperCase().contains(nameMenu.toUpperCase())}.isNotEmpty()
    }

    fun getMenuByName(nameMenu: String): Menu {
        //Prec.: el menu llamado nameMenu, existe en la lista menues del Provider
        return menus.filter { m-> m.name.toUpperCase().contains(nameMenu.toUpperCase())}[0]
    }

    fun deleteMennu(menu: Menu){
        if (menu.itsOver())
            { menus.remove(getMenuByName(menu.name))}

    }

}







