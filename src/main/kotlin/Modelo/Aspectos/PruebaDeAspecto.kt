package Modelo.Aspectos

import Api.FireBaseService
import com.google.firebase.auth.FirebaseAuth
import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.aspectj.lang.ProceedingJoinPoint
import org.aspectj.lang.annotation.Around
import org.aspectj.lang.annotation.Aspect
import org.aspectj.lang.reflect.MethodSignature
import org.joda.time.DateTime
import org.springframework.stereotype.Component
import java.util.Arrays.asList

@Aspect
@Component
class ServicioLogin{

    val logger: Logger = LogManager.getLogger(ServicioLogin::class.java)

    @Around("execution (* Modelo.Api.*.*(..) )")
    fun PrinteaCosas( funcion: ProceedingJoinPoint ) :Any {
        val userName = obtenerNombreUsuario(funcion)
        val method = obtenerNombreMetodo(funcion)
        val timeStamp = DateTime.now().toString()
        val arguments = obtenetArgumentos(funcion)
        logger.info("user {} called {}  at {} with arguments: {} ", userName, method, timeStamp, arguments)
        return funcion.proceed()}

    fun obtenetArgumentos(funcion: ProceedingJoinPoint) :String  {
        var string = "";

        funcion.getArgs().forEach{ argument -> string = string + " \n " + argument.toString()  + " " }
        return string;
    }

    fun obtenerNombreMetodo(funcion: ProceedingJoinPoint): String {
        val methodSignature: MethodSignature = funcion.signature as MethodSignature
        return methodSignature.name
    }

    fun obtenerNombreUsuario(funcion: ProceedingJoinPoint): String {
        var token = funcion.getArgs()[0].toString()
        var userToken = FireBaseService().veryfiToken(token)
        var userName = FireBaseService().getUserData(userToken.uid).displayName
        return userName
    }

}