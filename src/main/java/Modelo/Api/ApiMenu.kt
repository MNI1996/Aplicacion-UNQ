package Modelo.Api

import Modelo.Dispachers.DispacherMenu
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/Menu")
class ApiMenu(){
    @Autowired
    lateinit var menus: DispacherMenu

    @RequestMapping("/main")
    fun jose():String {
        return "String ja";
    }

}