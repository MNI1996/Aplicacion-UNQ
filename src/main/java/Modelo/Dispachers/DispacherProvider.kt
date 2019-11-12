package Modelo.Dispachers

import Modelo.Daos.DaoProvider
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class DispacherProvider () {

    @Autowired
    lateinit var dao: DaoProvider


}
