package leopardiproject.csd.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import leopardiproject.csd.model.Poesie;
import leopardiproject.csd.repository.PoesieRepository;

@RestController
@CrossOrigin
public class PoesieController {
    
@Autowired
PoesieRepository rep;

@GetMapping("/getPoesie")
public List<Poesie> getPoesie(){
    return (List<Poesie>) rep.findAll();
}

@GetMapping("/getPoesia/{titolo}")
public Poesie getPoesia(@PathVariable String titolo){
    return rep.findByTitolo(titolo);
}

@GetMapping("/poesia/{capitolo}")
public List<Poesie> getPoesia(@PathVariable int capitolo){
    return (List<Poesie>) rep.findByCapitolo(capitolo);
}

@GetMapping("/getPoesiaAudio/{id}")
public Poesie getPoesiaByAudio(@PathVariable int id){
    return rep.findById(id);
}

@GetMapping("/poesiaLike/{titolo}")
public List<Poesie> getPoesieDalTitoloFiltrato(Model model, @Param("titolo") Poesie poesia){
    List<Poesie> listaPoesie = rep.search(poesia.getTitolo());
    model.addAttribute("listaPoesie", listaPoesie);
    model.addAttribute("titolo", poesia.getTitolo());
    return (List<Poesie>) rep.search(poesia.getTitolo());
}

@PostMapping("/inserisciPoesia")
String addPoesia(Authentication a, @RequestBody Poesie poesia){
    rep.save(poesia);
    return "Poesia aggiunta correttamente";
}
}