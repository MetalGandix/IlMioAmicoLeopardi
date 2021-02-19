package leopardiproject.csd.model;

import javax.persistence.*;

@Entity
public class Poesie {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String titolo;

    @Column
    private String testo;

    @Column
    private int capitolo;

    @Column
    private boolean isText;

    @Column
    private boolean audioNotExist;

    @Column
    private int audio_id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public String getTesto() {
        return testo;
    }

    public void setTesto(String testo) {
        this.testo = testo;
    }

    public int getCapitolo() {
        return capitolo;
    }

    public void setCapitolo(int capitolo) {
        this.capitolo = capitolo;
    }

    public boolean getIsText() {
        return isText;
    }

    public void setIsText(boolean isText) {
        this.isText = isText;
    }

    public boolean getAudioNotExist() {
        return audioNotExist;
    }

    public void setAudioNotExist(boolean audioNotExist) {
        this.audioNotExist = audioNotExist;
    }

    public int getAudio_id() {
        return audio_id;
    }

    public void setAudio_id(int audio_id) {
        this.audio_id = audio_id;
    }
}