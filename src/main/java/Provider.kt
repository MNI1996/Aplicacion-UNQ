package Resto

import main.java.Horarios
import main.java.Menu


class Provider( var name: String,var logo :String ,var localidad:String, var ubication:Ubicacion,var direccion:String,
                var descripcionService:String, var webSite:String?,var mail:String,var telefono:Int,var horariosDeSemana:Horarios
                ,var diasDeAtencion: DiasDeSemana,var rangoEntrega:Int, var menus:MutableList<Menu>) {

    fun addMenu (mennu: Menu){
        menus.add(mennu)
    }


    fun containsMenu(nameMenu: String): Boolean {
        return menus.filter { m-> m.name.toUpperCase().contains(nameMenu.toUpperCase())}.isNotEmpty()
    }

    fun getMenuByName(nameMenu: String): Menu {
        //Prec.: el menu llamado nameMenu, existe en la lista mennues del Resto
        return menus.filter { m-> m.name.toUpperCase().contains(nameMenu.toUpperCase())}[0]
    }

    fun giveNewCodeOrder(): Int {
        return Math.random().toInt()//esto es misible
    }

    fun deleteMennu(mennu: Menu){
        menus.remove(getMenuByName(mennu.name))
    }

}







