package Modelo.Dispachers

import Modelo.Daos.DaoProvider
import Modelo.Enums.Categoria
import Modelo.Enums.DiasDeSemana
import Modelo.Enums.Horarios
import Modelo.Menu
import Modelo.Promocion
import Modelo.Provider
import org.joda.time.DateTime
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class DispacherProvider () {

    @Autowired
    lateinit var dao: DaoProvider


    var prov = Provider("el Buen Comer","url","Quilmes", "asd",
            "add","servicio de comidas"
            ,null,"sdhad@gmail.com",45434542, mutableListOf(Horarios.Morning, Horarios.Afternoon),
            mutableListOf(DiasDeSemana.Lunes, DiasDeSemana.Martes, DiasDeSemana.Miercoles,
                    DiasDeSemana.Jueves, DiasDeSemana.Viernes),20)
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


    fun buildUser() {
        prov.addMenu(menu)
        prov.addMenu(menu1)
        prov.addMenu(menu2)
        prov.addMenu(menu3)
        dao.save(prov)
    }

}
