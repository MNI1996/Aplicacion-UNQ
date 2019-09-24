import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;


@RestController
public class GreetingController {


    @RequestMapping("/main")
    public String main() { //@RequestParam(value="name", defaultValue="World")
        return "String ja";
    }

}
