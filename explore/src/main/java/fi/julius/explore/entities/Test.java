package fi.julius.explore.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Test{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String teksti;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeksti() {
        return this.teksti;
    }

    public void setTeksti(String teksti) {
        this.teksti = teksti;
    }
    


}


