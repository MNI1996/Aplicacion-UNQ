package Modelo.Daos
import Modelo.Order
import Modelo.Provider
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository


@Repository
interface DaoProvider: CrudRepository< Provider, Long> {
    fun findByid(id: Long): MutableList <Provider>

}