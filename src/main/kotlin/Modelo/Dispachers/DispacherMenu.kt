package Modelo.Dispachers

import Modelo.Daos.DaoMenu
import Modelo.Enums.Categoria
import Modelo.Enums.Horarios
import Modelo.Menu
import Modelo.Promocion
import org.joda.time.DateTime
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class DispacherMenu () {

 @Autowired
    lateinit var dao: DaoMenu


    var menu= Menu("arroz","arroz blancooooooooooooooo", Categoria.Vegano
            ,10, DateTime.now().plusYears(1), Horarios.Morning, DateTime.now().plusDays(10),50.00
            , Promocion(11,30.00),null
            ,100,true)

    var menu1= Menu("arroz","arroz blancooooooooooooooo", Categoria.Vegano
            ,10, DateTime.now().plusYears(1), Horarios.Morning, DateTime.now().plusDays(10),50.00
            , Promocion(11,30.00),null
            ,100,true)

    var menu2= Menu("arroz","arroz blancooooooooooooooo", Categoria.Vegano
            ,10, DateTime.now().plusYears(1), Horarios.Morning, DateTime.now().plusDays(10),50.00
            , Promocion(11,30.00),null
            ,100,true)

    var menu3= Menu("arroz","arroz blancooooooooooooooo", Categoria.Vegano
            ,10, DateTime.now().plusYears(1), Horarios.Morning, DateTime.now().plusDays(10),50.00
            , Promocion(11,30.00),null
            ,100,true)

    fun buildMenus(){
        dao.save(menu)
        dao.save(menu1)
        dao.save(menu2)
        dao.save(menu3)

    }


}
