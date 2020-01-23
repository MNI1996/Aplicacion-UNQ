package Modelo

import Api.FireBaseService
import Modelo.Daos.DaoProvider
import Modelo.Daos.DaoUser
import Modelo.Enums.Categoria
import Modelo.Enums.DiasDeSemana
import Modelo.Enums.Horarios
import org.joda.time.DateTime
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import Modelo.Dispachers.DispacherProvider

@SpringBootApplication
@EnableJpaAuditing
class App

fun main(args: Array<String>) {

    runApplication<App>(*args)
    FireBaseService().initialize()
    DispacherProvider().buildUser()
}

