package App;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

//@CrossOrigin(origins = "http://localhost:9000")
@RestController
public class GreetingController {


    @RequestMapping("/main")
    public String main() { //@RequestParam(value="name", defaultValue="World")
        return "String ja";
    }

}
