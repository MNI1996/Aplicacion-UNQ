package Modelo.Daos

import Modelo.Order
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository


@Repository
interface DaoOrder: CrudRepository< Order, Long> {
    fun findByid(id: Long): MutableList <Order>
}