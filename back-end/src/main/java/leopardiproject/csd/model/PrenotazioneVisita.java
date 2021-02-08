package leopardiproject.csd.model;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "prenotazione")
public class PrenotazioneVisita {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column
    private LocalDate data;

    @Column
    private String orario;

    @Column
    private int numcomponenti;

    @Column
    private String nome;

    @Column
    private String cognome;

    @Column
    private String professione;

    @Column
    private String cellulare;

    @Column
    private String paese;

    @Column
    private String citta;

    @Column
    private String infoAggiuntiva;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_USERNAME", referencedColumnName="username")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private DAOUser prenotazioneVisitatore;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getOrario() {
        return orario;
    }

    public void setOrario(String orario) {
        this.orario = orario;
    }

    public int getNumcomponenti() {
        return numcomponenti;
    }

    public void setNumcomponenti(int numcomponenti) {
        this.numcomponenti = numcomponenti;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getCellulare() {
        return cellulare;
    }

    public void setCellulare(String cellulare) {
        this.cellulare = cellulare;
    }

    public String getPaese() {
        return paese;
    }

    public void setPaese(String paese) {
        this.paese = paese;
    }

    public String getCitta() {
        return citta;
    }

    public void setCitta(String citta) {
        this.citta = citta;
    }

    public String getInfoAggiuntiva() {
        return infoAggiuntiva;
    }

    public void setInfoAggiuntiva(String infoAggiuntiva) {
        this.infoAggiuntiva = infoAggiuntiva;
    }

    public String getProfessione() {
        return professione;
    }

    public void setProfessione(String professione) {
        this.professione = professione;
    }

    public DAOUser getPrenotazioneVisitatore() {
        return prenotazioneVisitatore;
    }

    public void setPrenotazioneVisitatore(DAOUser prenotazioneVisitatore) {
        this.prenotazioneVisitatore = prenotazioneVisitatore;
    }

}