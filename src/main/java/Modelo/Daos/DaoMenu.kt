package Modelo.Daos

import Menu
import Modelo.Menu2
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository


@Repository
interface DaoMenu: CrudRepository< Menu, Long> {
    fun findByname(name: String): MutableList < Menu >
}
