package Modelo.Api

import Modelo.Dispachers.DispacherMenu
import Modelo.Dispachers.DispacherUser
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/Client")
class ApiClientUser {
    @Autowired
    lateinit var Clientes: DispacherUser

    @RequestMapping("/LogUser", method = [RequestMethod.POST])
    fun main(@RequestHeader("X-Firebase-ID-Token") token: String):Boolean? {
        var userData = FireBaseService().veryfiToken(token)
        var userId = userData.isEmailVerified
        var data = Clientes.getDataUser(userData)
        println(data)
        return userId;
    }
}