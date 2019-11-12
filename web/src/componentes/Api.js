
class Api {
    url = "http://localhost:3000"
    obtenerAlgo(){
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET',this.url);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            console.log(ourData);
        };
        ourRequest.send();
        return ourRequest
    }
}
export default Api