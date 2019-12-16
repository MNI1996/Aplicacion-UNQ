package Modelo.Dispachers

import Modelo.Daos.DaoMenu
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class DispacherMenu () {

 @Autowired
    lateinit var dao: DaoMenu


}
