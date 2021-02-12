package leopardiproject.csd.controller;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import leopardiproject.csd.SmtpMailSender;
import leopardiproject.csd.model.Contatti;
import leopardiproject.csd.repository.ContattiRepository;

@RestController
@CrossOrigin
public class ContattiController {
    
    @Autowired
    private ContattiRepository rep;

    @Autowired
    private SmtpMailSender smtpMailSender;

    @PostMapping("/inserisciMessaggioContatti")
    String sendMessage(@RequestBody Contatti contatti) throws MessagingException{
        smtpMailSender.send("prenotazioni@centroleopardi.it", contatti.getEmail(), contatti.getMessaggio());
        rep.save(contatti);
        return "Messaggio inviato";
    }
}
