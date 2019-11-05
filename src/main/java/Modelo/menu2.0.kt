package Modelo

import Fecha
import Modelo.Enums.Categoria
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


@Entity
class Menu2(

        var name: String="",
        @Transient
        var categoria: Categoria = Categoria.Cerveza,
        @Transient
        var valorDelivery: Int=0,
        var duracionMenu: Fecha=Fecha(12,12,12)
        ){
    @Id @GeneratedValue(strategy= GenerationType.AUTO)
    var id:Long = 0
}