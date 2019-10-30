package App

import Dispachers.DispacherMenu
import org.springframework.stereotype.Repository
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/Menu")
class ApiMenu(val menus: DispacherMenu){

    @RequestMapping("/main")
    fun main():String {
        return "String ja";
    }

}