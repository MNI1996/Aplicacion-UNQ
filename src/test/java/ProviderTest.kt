
import Modelo.Enums.Categoria
import Modelo.Enums.DiasDeSemana
import Modelo.Enums.Horarios
import Modelo.Enums.MedidorDelLapso
import junit.framework.Assert.assertEquals
import org.junit.Test


import kotlin.test.assertFails

class ProviderTest{
    @Test
    fun registroMenuExitoso(){
        var prov =Provider("el Buen Comer","url","Quilmes", Posicion(),
                "add","servicio de comidas"
                ,null,"sdhad@gmail.com",45434542, mutableListOf(Horarios.Morning, Horarios.Afternoon),
                mutableListOf(DiasDeSemana.Lunes, DiasDeSemana.Martes, DiasDeSemana.Miercoles,
                        DiasDeSemana.Jueves, DiasDeSemana.Viernes),20)
        var menu= Menu("arroz","arroz blancooooooooooooooo", Categoria.Vegano
                ,10,Fecha(28,9,2019), Horarios.Morning, TimeLapsus(10, MedidorDelLapso.Minutes),50.00
                , Promocion(11,30.00),null
                ,100,true)
        prov.addMenu(menu)
        assertEquals(1,prov.menus.size)
    }

    @Test
    fun registroMenuFallido(){
        var prov =Provider("el Buen Comer","url","Quilmes", Posicion(),
                "add","servicio de comidas"
                ,null,"sdhad@gmail.com",45434542, mutableListOf(Horarios.Morning, Horarios.Afternoon),
                mutableListOf(DiasDeSemana.Lunes, DiasDeSemana.Martes, DiasDeSemana.Miercoles,
                        DiasDeSemana.Jueves, DiasDeSemana.Viernes),20)
        var menu= Menu("arroz","arroz blancooooooooooooooo", Categoria.Vegano
                ,10,Fecha(28,9,2019), Horarios.Morning, TimeLapsus(10, MedidorDelLapso.Minutes),50.00
                , Promocion(3,30.00),null
                ,100,true)
        assertFails(" el menu no cumple con los requerimientos minimos de aceptacion",{prov.addMenu(menu)})
    }
    @Test
    fun quitoMenuCaducoYNoPuedo(){
        var menu= Menu("arroz","arroz blancooooooooooooooo", Categoria.Vegano
                ,10,Fecha(28,9,2019), Horarios.Morning, TimeLapsus(10, MedidorDelLapso.Minutes),50.00
                , Promocion(11,30.00),null
                ,100,true)
        var prov =Provider("el Buen Comer","url","Quilmes", Posicion(),
                "add","servicio de comidas"
                ,null,"sdhad@gmail.com",45434542, mutableListOf(Horarios.Morning, Horarios.Afternoon),
                mutableListOf(DiasDeSemana.Lunes, DiasDeSemana.Martes, DiasDeSemana.Miercoles,
                        DiasDeSemana.Jueves, DiasDeSemana.Viernes),20)
        prov.addMenu(menu)
        prov.deleteMennu(menu)
        assertEquals(1,prov.menus.size)

    }
}