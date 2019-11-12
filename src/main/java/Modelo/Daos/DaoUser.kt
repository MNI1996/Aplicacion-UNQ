package Modelo.Daos

import Modelo.ClientUser
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository


@Repository
interface DaoUser: CrudRepository< ClientUser, Long> {
    fun findByname(name: String): MutableList <ClientUser>
}