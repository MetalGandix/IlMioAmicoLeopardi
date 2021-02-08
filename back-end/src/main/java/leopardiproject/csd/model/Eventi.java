package leopardiproject.csd.model;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.persistence.*;

@Entity
public class Eventi {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String nomeEvento;

    @Column
    private LocalDate dataEvento;

    @Column
    private String descrizione;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private ImageModel evento_immagine;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNomeEvento() {
        return nomeEvento;
    }

    public void setNomeEvento(String nomeEvento) {
        this.nomeEvento = nomeEvento;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public String getDataEvento() {
        String formattedDate = dataEvento.format(DateTimeFormatter.ofPattern("dd MMMM yyyy"));
        return formattedDate;
    }

    public void setDataEvento(LocalDate dataEvento) {
        this.dataEvento = dataEvento;
    }

    public ImageModel getEvento_immagine() {
        return evento_immagine;
    }

    public void setEvento_immagine(ImageModel evento_immagine) {
        this.evento_immagine = evento_immagine;
    }
}
