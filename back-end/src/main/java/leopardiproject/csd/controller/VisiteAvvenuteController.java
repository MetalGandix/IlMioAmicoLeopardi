package leopardiproject.csd.controller;

import java.util.List;
import leopardiproject.csd.model.VisiteAvvenute;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import leopardiproject.csd.repository.VisiteAvvenuteRepository;

@RestController
@CrossOrigin
public class VisiteAvvenuteController {
    @Autowired
    private VisiteAvvenuteRepository rep;

    @PostMapping("/visiteAvvenute")
    public String mandaVisitaCancellata(Authentication a, @RequestBody VisiteAvvenute visita){
        rep.save(visita);
        return "La visita è stata mandata correttamente nella lista delle visite avvenute";
    }

    @GetMapping("/visiteAvvenute")
    public List<VisiteAvvenute> vediVisitaCancellata(Authentication a){
        return (List<VisiteAvvenute>) rep.findAll();
    }

    @DeleteMapping("/cancellaVisitaAvvenuta/{id}")
    public String deletePrenotazione(Authentication a, @PathVariable long id){
        VisiteAvvenute visiteAvvenute = rep.getOne(id);
        rep.delete(visiteAvvenute);
        return "Prenotazione correttamente eliminata dalla lista delle visite avvenute";
    }
}
