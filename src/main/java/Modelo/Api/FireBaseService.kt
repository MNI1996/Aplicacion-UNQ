package Modelo.Api

import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.auth.FirebaseAuth
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.io.ClassPathResource;
import java.io.IOException


class FireBaseService {

    fun initialize(){
        try {
            val options = FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(ClassPathResource("/KEY_FIREBASE.json").inputStream))
                    .build()
            FirebaseApp.initializeApp(options)
            print("FireBase inizialized")
        } catch (error: IOException) {
            error.printStackTrace()
        }
    }

    fun veryfiToken(token: String): Boolean {
        return FirebaseAuth.getInstance().verifyIdToken(token).isEmailVerified
    }

    fun getMail(token: String): String? {
        return FirebaseAuth.getInstance().verifyIdToken(token).email
    }
}