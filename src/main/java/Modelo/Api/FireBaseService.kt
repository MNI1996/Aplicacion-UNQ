package Modelo.Api

import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseToken
import com.google.firebase.auth.UserRecord
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component
import java.io.IOException

@ConfigurationProperties
class FireBaseService() {

    @Value("\${spring.Firebase}")
    var clave :String? = null

    fun initialize(){
        try {
            println(clave + "pene")
            val options = FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(ClassPathResource("/KEY_FIREBASE.json").inputStream))
                    .build()
            FirebaseApp.initializeApp(options)
            println("FireBase inizialized")
        } catch (error: IOException) {
            error.printStackTrace()
        }
    }

    fun veryfiToken(token: String): FirebaseToken {
        return FirebaseAuth.getInstance().verifyIdToken(token)
    }

    fun getUserData(uid: String): UserRecord {
        return FirebaseAuth.getInstance().getUser(uid)
    }

}