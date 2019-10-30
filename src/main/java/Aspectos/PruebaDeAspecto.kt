

import org.aspectj.lang.annotation.*
import org.springframework.stereotype.Component
import java.time.LocalDateTime

@Aspect
@Component
class ServicioLogin{
    @Pointcut("execution(* AppModel.(..))")
    fun logIn():Unit{}

    @Before("logIn()")
    fun beforeLoginAdvice() {
        System.out.println("iniciado " + LocalDateTime.now());
    }

    @After("logIn()")
    fun afterLoginAdvice() {
        System.out.println("terminado " + LocalDateTime.now());
    }

}