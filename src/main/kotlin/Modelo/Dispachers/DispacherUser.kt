package Modelo.Dispachers

import Modelo.ClientUser
import Modelo.Daos.DaoUser
import Modelo.DatosComprador
import Modelo.Provider
import com.google.firebase.auth.FirebaseToken
import com.google.firebase.auth.UserRecord
import org.json.simple.JSONObject
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class DispacherUser () {

    @Autowired
    lateinit var dao: DaoUser

    fun getDataUser(user: UserRecord): ClientUser {
        if( !dao.existsClientUserByMail(user.email)){
            var newUser = ClientUser(user.displayName, user.email, user.phoneNumber)
            dao.save(newUser)
            println("entro a crear usuario")
        }
        var user = dao.findByMail(user.email)
        return user
    }

    fun setCompradorData(user: UserRecord ,datosComprador: DatosComprador): ClientUser {
        var user = dao.findByMail(user.email)
        println(user)
        user.datosComprador = datosComprador
        dao.save(user)
        return user
    }

    fun setProvedorData(user: UserRecord ,datosProvedor: Provider): ClientUser {
        var user = dao.findByMail(user.email)
        user.datosProvider = datosProvedor
        dao.save(user)
        return user
    }
}
