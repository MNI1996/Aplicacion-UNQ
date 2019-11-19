
import Modelo.*
import Modelo.Enums.Categoria
import Modelo.Enums.DiasDeSemana
import Modelo.Enums.Horarios
import Modelo.Enums.MedidorDelLapso
import junit.framework.Assert.assertEquals
import org.junit.Test
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.AnnotationConfigApplicationContext
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import com.github.debop.kodatimes.days
import org.joda.time.DateTime
import java.util.*
import kotlin.test.assertFails
import kotlin.time.days

class AppModelTest{

    @Test
    fun registroUsuarioExitoso(){
        var app= AppModel()
        var user = ClientUser("marcos","anhur","jkhjkhk@yahoo.com.ar",
                1138921839,"Bernal","comodoro Rivadavia")
        app.signUpClientUser(user)
        assertEquals(app.clientsUsers.size,1)
    }
    @Test
    fun registroUsuarioFallido(){
        var app= AppModel()
        var user = ClientUser("marcos","anhur","jkhjkhk@yahoo.com.ar",
                1138921839,"Bernal","comodoro Rivadavia")
        var user2 = ClientUser("marcos","anhur","jkhjkhk@yahoo.com.ar",
                1138921839,"Bernal","comodoro Rivadavia")
        app.signUpClientUser(user)

       assertFails("El usuario marcos ya esta registrado", { app.signUpClientUser(user2) })
    }
    @Test
    fun registroProveedorExitoso(){
        var app= AppModel()
        var prov =Provider("el Buen Comer","url","Quilmes", Posicion(/*13443.00,1339.00*/),
                "add","servicio de comidas"
                ,null,"sdhad@gmail.com",45434542, mutableListOf(Horarios.Morning, Horarios.Afternoon),
                mutableListOf(DiasDeSemana.Lunes, DiasDeSemana.Martes, DiasDeSemana.Miercoles,
                        DiasDeSemana.Jueves, DiasDeSemana.Viernes),20)
        app.signUpProvider(prov)

        assertEquals(app.providers.size,1)
    }
    @Test
    fun registroProveedorFallido(){
        var app= AppModel()
        var prov =Provider("el Buen Comer","url","Quilmes", Posicion(/*343.00,45.00*/),
                "add","servicio de comidas"
                ,null,"sdhad@gmail.com",45434542, mutableListOf(Horarios.Morning, Horarios.Afternoon),
                mutableListOf(DiasDeSemana.Lunes, DiasDeSemana.Martes, DiasDeSemana.Miercoles,
                        DiasDeSemana.Jueves, DiasDeSemana.Viernes),20)
        var prov2 =Provider("el Buen Comer","url","Quilmes", Posicion(/*12332.00,1313.00*/),
                "add","servicio de comidas"
                ,null,"sdhad@gmail.com",45434542
                , mutableListOf(Horarios.Morning, Horarios.Afternoon),
                mutableListOf(DiasDeSemana.Lunes, DiasDeSemana.Martes, DiasDeSemana.Miercoles,
                        DiasDeSemana.Jueves, DiasDeSemana.Viernes),20)
        app.signUpProvider(prov)

        assertFails("El servicio ${prov2.name} ya esta registrado en la localidad de ${prov2.localidad}", { app.signUpProvider(prov2) })
    }



    @Test
    fun generoUnaOrdenExitosa(){
var lapsus= TimeLapsus(10, MedidorDelLapso.Minutes)
        var app= AppModel()
        var user= ClientUser("marcos","anhur","jkhjkhk@yahoo.com.ar",
                1138921839,"Bernal","comodoro Rivadavia")
        var provider=Provider("el Buen Comer","url","Quilmes", Posicion(/*13.00,134141.00*/),
                "add","servicio de comidas"
                ,null,"sdhad@gmail.com",45434542, mutableListOf(Horarios.Morning, Horarios.Night),
                mutableListOf(DiasDeSemana.Lunes, DiasDeSemana.Martes, DiasDeSemana.Miercoles,
                        DiasDeSemana.Jueves, DiasDeSemana.Viernes),20)
        var menu= Menu("arroz","arroz blancooooooooooooooo", Categoria.Vegano
                        ,10, DateTime.now().plusDays(1), Horarios.Morning
                        ,lapsus ,50.00 , Promocion(11,30.00)
                        ,null,100,true)
        app.signUpProvider(provider)
        app.signUpClientUser(user)
        provider.addMenu(menu)
        user.recargar(160.00)
        app.generateOrder(mutableListOf(Pair(3,menu)),user,provider)
        assertEquals(0.00,user.saldo)
        assertEquals(1,provider.history.size)
        assertEquals(1,user.history.size)


    }
    @Test
    fun generoUnaOrdenFallida(){
        var lapsus= TimeLapsus(10, MedidorDelLapso.Minutes)
        var app= AppModel()
        var user= ClientUser("marcos","anhur","jkhjkhk@yahoo.com.ar",
                1138921839,"Bernal","comodoro Rivadavia")
        var provider=Provider("el Buen Comer","url","Quilmes", Posicion(/*4313.00,1310.00*/),
                "add","servicio de comidas"
                ,null,"sdhad@gmail.com",45434542, mutableListOf(Horarios.Morning, Horarios.Night),
                mutableListOf(DiasDeSemana.Lunes, DiasDeSemana.Martes, DiasDeSemana.Miercoles,
                        DiasDeSemana.Jueves, DiasDeSemana.Viernes),20)
        var menu= Menu("arroz","arroz blancooooooooooooooo", Categoria.Vegano
                ,10, DateTime.now().plusDays(2), Horarios.Morning
                ,lapsus ,50.00 , Promocion(11,30.00)
                ,null,100,true)
        app.signUpProvider(provider)
        app.signUpClientUser(user)
        provider.addMenu(menu)
        user.recargar(160.00)

        assertFails("Algo ha salido mal, revise que posea saldo suficiente y su compra",  {app.generateOrder(mutableListOf(Pair(5,menu)),user,provider)})



    }




    }
