package leopardiproject.csd.controller;

import java.util.List;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import leopardiproject.csd.model.DiventaSocio;
import leopardiproject.csd.repository.DiventaSocioRepository;

@RestController
@CrossOrigin
public class DiventaSocioController {

    @Autowired
    private DiventaSocioRepository rep;

    @GetMapping("/vediModuli")
    public List<DiventaSocio> getVisite(Authentication a) {
        return (List<DiventaSocio>) rep.findAll();
    }

    @PostMapping("/inserisciModulo")
    String addEvent(@RequestBody DiventaSocio modulo) {
        rep.save(modulo);
        return "Modulo correttamente compilato";
    }

    @DeleteMapping("/cancellaModulo/{id}")
    public String deleteModulo(Authentication a, @PathVariable long id){
        DiventaSocio modulo = rep.getOne(id);
        rep.delete(modulo);
        return "modulo correttamente eliminato";
    }
}
