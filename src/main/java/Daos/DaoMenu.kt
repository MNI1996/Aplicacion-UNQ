package Daos

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.awt.Menu

@Repository
interface DaoMenu:JpaRepository<Menu,Int> {}