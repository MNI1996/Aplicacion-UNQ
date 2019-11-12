package Modelo.Dispachers

import Modelo.Daos.DaoOrder
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class DispacherOrder () {

    @Autowired
    lateinit var dao: DaoOrder


}
