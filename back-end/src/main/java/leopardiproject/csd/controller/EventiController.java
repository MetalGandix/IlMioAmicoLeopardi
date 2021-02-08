package leopardiproject.csd.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import leopardiproject.csd.model.EventRequest;
import leopardiproject.csd.model.Eventi;
import leopardiproject.csd.model.ImageModel;
import leopardiproject.csd.repository.EventiRepository;
import leopardiproject.csd.repository.ImageRepository;

@RestController
@CrossOrigin
public class EventiController {

    @Autowired
    private EventiRepository rep;

    @Autowired
    private ImageRepository imgRep;

    @GetMapping("/vediEventi")
    public List<Eventi> getVisite() {
        return (List<Eventi>) rep.findAll();
    }

    @PostMapping("/inserisciEventi")
    String addEvent(Authentication a, @RequestBody EventRequest request ) {
        Optional<ImageModel> immagine = imgRep.findById(request.imageId);
        request.event.setEvento_immagine(immagine.get());
        rep.save(request.event);
        return "Evento inserito correttamente";
    }    

    @DeleteMapping("/cancellaEvento/{id}")
    public String deleteEvento(Authentication a, @PathVariable long id){
        Eventi ev = rep.getOne(id);
        rep.delete(ev);
        return "evento correttamente eliminato";
    }

}