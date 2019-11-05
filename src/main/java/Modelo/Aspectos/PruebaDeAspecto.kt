package Modelo.Aspectos

import org.aspectj.lang.ProceedingJoinPoint
import org.aspectj.lang.annotation.*
import org.springframework.stereotype.Component
import java.time.LocalDateTime
import kotlin.reflect.jvm.internal.impl.load.kotlin.JvmType

@Aspect
@Component
class ServicioLogin{

    @Around("execution(public * Modelo.AppModel.*.*(..)))")
    fun PrinteaCosas( funcion: ProceedingJoinPoint ):Any {
        System.out.println("iniciado " + LocalDateTime.now());
        var respuesta = funcion.proceed()
        System.out.println("terminado " + LocalDateTime.now());
        return respuesta
    }
}