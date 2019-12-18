package Modelo.Api

import Api.FireBaseService
import Modelo.ClientUser
import Modelo.DatosComprador
import Modelo.Dispachers.DispacherUser
import Modelo.Provider
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/Client")
class ApiClientUser {
    @Autowired
    lateinit var Clientes: DispacherUser

    @RequestMapping("/LogUser", method = [RequestMethod.POST])
    fun LogUser(@RequestHeader("X-Firebase-ID-Token") token: String): ClientUser {
        var userToken = FireBaseService().veryfiToken(token)
        var userData = FireBaseService().getUserData(userToken.uid)
        var user = Clientes.getDataUser(userData)
        return user
    }

    @RequestMapping("/CompradorData", method = [RequestMethod.POST])
    fun comprador(@RequestHeader("X-Firebase-ID-Token") token: String,@RequestBody datosComprador: DatosComprador): ClientUser {
        var userData = FireBaseService().veryfiToken(token)
        var user = FireBaseService().getUserData(userData.uid)
        var data = Clientes.setCompradorData(user,datosComprador)
        return data
    }

    @RequestMapping("/ProviderData", method = [RequestMethod.POST])
    fun provider(@RequestHeader("X-Firebase-ID-Token") token: String,@RequestBody datosProvedor: Provider): ClientUser {
        var userData = FireBaseService().veryfiToken(token)
        var user = FireBaseService().getUserData(userData.uid)
        var data = Clientes.setProvedorData(user,datosProvedor)
        return data
    }


}