package leopardiproject.csd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import leopardiproject.csd.model.ModuliConfermati;
import leopardiproject.csd.repository.ModuliConfermatiRepository;

@RestController
@CrossOrigin
public class ModuliConfermatiController {
    @Autowired
    private ModuliConfermatiRepository rep;

    @PostMapping("/moduliConfermati")
    public String addModuloConfermato(Authentication a, @RequestBody ModuliConfermati modulo){
        rep.save(modulo);
        return "Modulo aggiunto con successo";
    }

    @GetMapping("/vediModuliConfermati")
    public List<ModuliConfermati> prendiModuliConfermati(Authentication a){
        return (List<ModuliConfermati>) rep.findAll();
    }

    @DeleteMapping("/eliminaModuliConfermati")
    public String eliminaModuloConfermato(Authentication a, @PathVariable long id){
        ModuliConfermati modulo = rep.getOne(id);
        rep.delete(modulo);
        return "Modulo correttamente eliminato";
    }
}
