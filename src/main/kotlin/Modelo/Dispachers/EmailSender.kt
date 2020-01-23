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


    fun sendMail(to: String, subject: String, text: String) {
        logger.info("enviando mail a " + to)
        var message = SimpleMailMessage()
        message.setTo(to)
        message.setSubject(subject)
        message.setText(text)
        mailSender.send(message)
        logger.info("se envio el mail a " + to)
    }


    @EventListener(ApplicationReadyEvent::class)
    fun sendMeMail() {
        sendMail("nahuel_necroligth@yahoo.com.ar"
                , "Mail de Prueba"
                , "Probando que manda un mail como la gente")
    }
}