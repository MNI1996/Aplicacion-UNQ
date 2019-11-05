package Modelo.Api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "http://localhost:9000")
@RestController
public class GreetingController {


    @RequestMapping("/main")
    public String main() { //@RequestParam(value="name", defaultValue="World")
        return "String ja";
    }

}
