package Modelo.Dispachers

import Modelo.Daos.DaoUser
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class DispacherUser () {

    @Autowired
    lateinit var dao: DaoUser

}
