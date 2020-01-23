package Api

import Modelo.Aspectos.ServicioLogin
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseToken
import com.google.firebase.auth.UserRecord
import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component
import java.io.IOException

@ConfigurationProperties
class FireBaseService() {

    @Value("\${spring.Firebase}")
    var clave :String? = null

    val logger: Logger = LogManager.getLogger(ServicioLogin::class.java)

    fun initialize(){
        try {
            val options = FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(ClassPathResource("/KEY_FIREBASE.json").inputStream))
                    .build()
            FirebaseApp.initializeApp(options)
            logger.info(" FireBase inizialized")
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