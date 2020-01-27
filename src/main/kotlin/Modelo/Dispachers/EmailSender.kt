package Modelo.Dispachers

import Modelo.Aspectos.ServicioLogin
import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.event.EventListener
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Component


@Component
class DispacherEmail {


    @Autowired
    lateinit var mailSender : JavaMailSender

    val logger: Logger = LogManager.getLogger(DispacherEmail::class.java)


    fun sendMail(message:SimpleMailMessage) {
        logger.info("enviando mail a " + message.to)
        mailSender.send(message)
        logger.info("se envio el mail a " + message.to)
    }

     fun buildMessage(to: String, subject: String, text: String):SimpleMailMessage{
         var message = SimpleMailMessage()
         message.setTo(to)
         message.setSubject(subject)
         message.setText(text)
         return message
     }

    @EventListener(ApplicationReadyEvent::class)
    fun sendMeMail() {
        sendMail(buildMessage("nahuel_necroligth@yahoo.com.ar"
                , "Mail de Prueba"
                , "Probando que manda un mail como la gente"))
    }
}