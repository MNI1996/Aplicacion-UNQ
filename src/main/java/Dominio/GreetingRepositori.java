package Dominio;

import org.springframework.data.domain.*;
import org.springframework.data.repository.*;

public interface GreetingRepositori extends Repository<Greeting,Long> {

    Page<Greeting> findAll(Pageable pageable);

    Greeting findByID(Long id);

}
