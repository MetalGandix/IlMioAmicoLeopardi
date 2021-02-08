package leopardiproject.csd.controller;

import leopardiproject.csd.SmtpMailSender;
import leopardiproject.csd.dto.UserDTO;
import leopardiproject.csd.jwt.JwtUserDetailsService;
import leopardiproject.csd.model.ConfirmationToken;
import leopardiproject.csd.model.DAOUser;
import leopardiproject.csd.model.Role;
import leopardiproject.csd.repository.ConfirmationTokenRepository;
import leopardiproject.csd.repository.RoleRepository;
import leopardiproject.csd.repository.UserDao;
import leopardiproject.csd.repository.UserRoleRepository;
import java.net.MalformedURLException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import javax.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private JwtUserDetailsService userRepository;

    @Autowired
    private UserDao repositoryUtente;
    
    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserDao rep;

    @Autowired
    private SmtpMailSender smtpMailSender;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @PostMapping("/user")
    String addUser(@RequestBody UserDTO user) throws MessagingException, MalformedURLException {
        ConfirmationToken confirmationToken = new ConfirmationToken(userRepository.save(user));
        confirmationTokenRepository.save(confirmationToken);
        String stringaMail = "Per confermare l'account, per favore clicca " 
        + "<a href=\"" + "http://localhost:8080/confirm-account?token="
        +confirmationToken.getConfirmationToken() + "\">" + "qua" + "</a>";
        smtpMailSender.send(user.getUsername(), "Conferma la tua email", stringaMail);
        return "Mail mandata";
    }

    @RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
    public String confirmUserAccount(@RequestParam("token")String confirmationToken)
    {
        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);
        if(token != null)
        {
            DAOUser user = repositoryUtente.findByUsername(token.getUser().getUsername());
            user.setEnabled(true);
            repositoryUtente.save(user);
        }
        else
        {
           return "Il link non funziona";
        }
        return "Mail verificata";
    }




    @GetMapping("/existUser/{username}")
    public boolean existUser(@PathVariable String username) {
        if (userRepository.findUserByUsername(username) == null) {
            return false;
        } else {
            return true;
        }
    }

    @GetMapping("/vediUtenti")
    public List<DAOUser> vediUtenti(Authentication a) {
        return (List<DAOUser>) userRepository.findAllTheUser();
    }

    @GetMapping("/vediUtenti/{username}")
    public DAOUser vediUtente(Authentication a, @PathVariable String username) {
        return (DAOUser) userRepository.findUserByUsername(username);
    }

    @PutMapping("/cambiaUtente/{usernameid}")
    public DAOUser cambiaUtente(Authentication a, @RequestBody UserDTO username) {
        return (DAOUser) userRepository.save(username);
    }

    @DeleteMapping("/eliminaUtente/{id}")
    public String eliminaUtente(Authentication a, @PathVariable long id){
        DAOUser user = rep.getOne(id);
        rep.delete(user);
        return "Utente eliminato correttamente";
    }

    @PatchMapping("/nominaAdmin/{id}")
    public String nominaAdmin(Authentication a, @PathVariable long id){
        Optional<DAOUser> user = userRepository.findById(id);
        if(user.isPresent()){
            DAOUser userRuolo = user.get();
            Role ruolo = roleRepository.findById(2);
            HashSet<Role> roles = new HashSet<Role>();
            roles.add(ruolo);
            userRuolo.setRoles(roles);
            repositoryUtente.save(userRuolo);
            return "Utente aggiornato";
        }
        else{
            return "Utente non aggiornato";
        }
    }


}