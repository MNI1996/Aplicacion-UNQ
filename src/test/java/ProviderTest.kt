package main.java

import junit.framework.Assert.assertEquals
import org.junit.Test
import java.sql.Time

class ProviderTest{
    @Test
    fun registroMenuExitoso(){
        var prov =Provider("el Buen Comer","url","Quilmes", Posicion(),
                "add","servicio de comidas"
                ,null,"sdhad@gmail.com",45434542, mutableListOf(Horarios.Morning,Horarios.Afternoon),
                mutableListOf(DiasDeSemana.Lunes,DiasDeSemana.Martes,DiasDeSemana.Miercoles,
                        DiasDeSemana.Jueves,DiasDeSemana.Viernes),20)
        var menu= Menu("arroz","arroz blancooooooooooooooo",Categoria.Vegano
                ,10,Duracion(4,MedidorDelLapso.Days),Horarios.Morning, Time(10),50.00
                , Promocion(3,30.00),null
                ,100,true)

        assertEquals(1,prov.addMenu(menu))


    }
    @Test
    fun registroMenuFallido(){



    }
    @Test
    fun quitoMenuCaduco(){

    }
}