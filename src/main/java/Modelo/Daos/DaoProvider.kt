package Modelo.Daos
import Modelo.Provider
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository


@Repository
interface DaoProvider: CrudRepository< Provider, Long> {
    fun findByname(name: String): MutableList <Provider>
}