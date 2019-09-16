package main.java


import Resto.Provider


class AppModel(var providers: MutableList<Provider>,
               var clientsUsers: MutableList<ClientUser>) {

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
        if(!existsProvier(provider)){
            providers.add(provider)
        }
        else {
            throw Exception("El provedor ${provider.name} ya esta registrado")
        }
    }

    fun existsProvier(newProvider: Provider): Boolean{
        return providers.any { provider -> provider.name == newProvider.name }
    }


    fun existsUser(user: ClientUser): Boolean {
        return providers.filter { u -> u.name == user.name }.isNotEmpty()
    }

/*    fun signUpResto(provider: Provider){
        if (providers.filter { r -> r == provider.code }.isEmpty()){
            restaurants.add(provider)
        }
        else{
            throw Exception("El restaurant ${provider.name} en la localidad ${provider.locality} ya existe en el sistema")
        }
    }*/

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


}