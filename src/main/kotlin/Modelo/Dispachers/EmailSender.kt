package Modelo.Dispachers

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.annotation.Bean
import org.springframework.context.event.EventListener
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.JavaMailSenderImpl

import org.springframework.stereotype.Component
import java.util.*



    @Autowired
    lateinit var mailSender : JavaMailSender




    fun sendMail(to: String, subject: String, text: String) {
        print("enviando mail a " + to)
        var message = SimpleMailMessage()
        message.setTo(to)
        message.setSubject(subject)
        message.setText(text)
        mailSender.send(message)
        print("se envio el mail a " + to)

    }


    @EventListener(ApplicationReadyEvent::class)
    fun sendMeMail() {
        println("printeo cosasssssssssssssssssss")
        sendMail("nahuel_necroligth@yahoo.com.ar"
                , "Mail de Prueba"
                , "Probando que manda un mail como la gente")
    }
