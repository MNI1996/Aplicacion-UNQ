package main.java



class Provider(var name: String, var logo :String, var localidad:String
               , var ubication: Posicion, var direccion:String
               ,var descripcionService:String, var webSite:String?, var mail:String
               , var telefono:Int, var horariosDeSemana: MutableList<Horarios>
               , var diasDeAtencion: MutableList<DiasDeSemana>, var rangoEntrega:Int )
{
    var categorias= mutableListOf<String>("Pizza","Cerveza","Hamburguesa","Sushi","Empanadas","Green","Vegano")
    var menus= emptyList<Menu>().toMutableList()

    fun addMenu (menu: Menu){
        var wat = isValidM(menu)
        if(wat){menus.add(menu)}
        else{throw Exception ("el menu no cumple con los requerimientos minimos de aceptacion")}

    }

    private fun isValidM(menu: Menu): Boolean {
        return(menu.precio.toInt() != 0
                && menu.primeraPromocion.cantidadMinima >=10
                && menu.primeraPromocion.cantidadMinima <=70
                && menu.name.length>=4
                && menu.description.length>=20
                && menu.description.length<=40
                && menu.valorDelivery>=10
                && menu.valorDelivery<=40
                && menu.tiempoEspera !=null
                && menu.stock != null
                && categorias.contains(menu.categoria.name))
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







