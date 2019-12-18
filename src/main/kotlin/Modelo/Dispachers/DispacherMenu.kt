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

    }



