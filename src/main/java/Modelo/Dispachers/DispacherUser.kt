package Modelo.Dispachers

import Modelo.Daos.DaoUser
import com.google.firebase.auth.FirebaseToken
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class DispacherUser () {

    @Autowired
    lateinit var dao: DaoUser

    fun getDataUser(token: FirebaseToken): Boolean {
        if( !dao.existsClientUserByMail(token.email)){

        }
        var user = dao.findByMail(token.email)

        return false
    }
}
