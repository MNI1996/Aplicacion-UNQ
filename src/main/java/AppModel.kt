
import org.springframework.stereotype.Component
import java.time.LocalDate

@Component
class AppModel() {

    var providers=emptyList<Provider>().toMutableList()
    var clientsUsers=emptyList<ClientUser>().toMutableList()
    var user : String=""
    var pass : String=""


    fun signUpClientUser(user: ClientUser){
        if(!existsUser(user)){
            clientsUsers.add(user)
        }
        else{
            throw Exception("El usuario ${user.name} ya esta registrado")
        }
    }

    fun signUpProvider(provider: Provider){//hay que terminar de modificarlo
        if(!existsProvider(provider)){
            providers.add(provider)
        }
        else {
            throw Exception("El provedor ${provider.name} ya esta registrado en la localidad ${provider.localidad}")
        }
    }

    fun existsProvider(newProvider: Provider): Boolean{
        return providers.filter { provider -> provider.name == newProvider.name }.isNotEmpty()
    }


    fun existsUser(user: ClientUser): Boolean {
        return clientsUsers.filter { u -> u.name == user.name }.isNotEmpty()
    }



    fun searchProviderByName(name: String): List<Provider>{
        return providers.filter{r -> r.name == name}
    }

    /*fun searchProviderByLocality(provName: String): List<Provider>{
        return providers.filter{provider -> provider.locality.toUpperCase().contains(provName.toUpperCase())}
    }*/

/*    fun searchProviderByLocalityAndName(provName: String, locality: String): List<Provider>{
        return searchProviderByName(provName).plus(searchRestoByCode(locality))
    }*/

    fun searchProviderByMenuName(nameMenu: String): MutableList<Provider>
    {   var list = emptyList<Provider>().toMutableList()
        for (p in providers){
            if (p.containsMenu(nameMenu)){
                list.add(p)
            }            
        }
        return list
    }

    fun generateOrder(menuList:MutableList<Pair<Int,Menu>>, user: ClientUser,provider:Provider) {
       var precioAPagar=montoFinal(menuList)
        if (validBuy(provider,menuList) && precioAPagar <= user.saldo)
        {
            var newOrder= Order(LocalDate.now(),user.name,
                   provider,generarListado(menuList),"En camino"
                    ,precioAPagar)
            user.history.add(newOrder)
            provider.history.add(newOrder)
            user.saldo -= newOrder.precioTotal
        }
        else
        {
            throw Exception("Algo ha salido mal, revise que posea saldo suficiente y su compra")
        }
    }

    private fun generarListado(menuList: MutableList<Pair<Int, Menu>>): MutableList<Menu> {
        var listaFinal= emptyList<Menu>().toMutableList()
       menuList.map{m -> listaFinal.addAll(generateSLM(m))}
        return listaFinal
    }

    private fun generateSLM(m: Pair<Int, Menu>): MutableList<Menu> {
        var ls = emptyList<Menu>().toMutableList()
        for (i in 1..m.first)
        {
            ls.add(m.second)
        }
        return ls
    }

    private fun validBuy(provider: Provider, menuList: MutableList<Pair<Int,Menu>>): Boolean {
         return (menuList.all { m -> provider.containsMenu(m.second.name) && m.second.stock >m.first  })
    }

    private fun montoFinal(menuList: MutableList<Pair<Int,Menu>>): Double {

        var listaDePrecioFinal= menuList.map{m -> m.second.calculatedPrice(m.first)}
        return listaDePrecioFinal.sum()
    }


}