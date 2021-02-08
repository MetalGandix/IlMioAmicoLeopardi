package leopardiproject.csd.controller;

import java.util.List;

import leopardiproject.csd.model.VisiteEliminate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import leopardiproject.csd.repository.VisiteEliminateRepository;


@RestController
@CrossOrigin
public class VisiteEliminateController {

    @Autowired
    private VisiteEliminateRepository visitaEliminataRep;


    @PostMapping("/visiteCancellate")
    public String mandaVisitaCancellata(Authentication a, @RequestBody VisiteEliminate visita){
        visitaEliminataRep.save(visita);
        return "La visita è stata mandata correttamente nella lista delle visite cancellate";
    }

    @GetMapping("/visiteCancellate")
    public List<VisiteEliminate> vediVisitaCancellata(Authentication a){
        return (List<VisiteEliminate>) visitaEliminataRep.findAll();
    }

    @DeleteMapping("/cancellaVisitaCancellata/{id}")
    public String deletePrenotazione(Authentication a, @PathVariable long id){
        VisiteEliminate visitaEliminata = visitaEliminataRep.getOne(id);
        visitaEliminataRep.delete(visitaEliminata);
        return "Prenotazione correttamente eliminata dalla lista delle visite cancellate";
    }

}