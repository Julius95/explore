package fi.julius.explore.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Todo{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    @NotBlank
    private String title;

    private boolean isCompleted;

    public Todo(){}


    public Todo(String title, boolean isCompleted) {
        this.title = title;
        this.isCompleted = isCompleted;
    }


    

    /**
     * @return the id
     */
    public int getId() {
        return Id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        Id = id;
    }

    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return the isCompleted
     */
    public boolean isCompleted() {
        return isCompleted;
    }

    /**
     * @param isCompleted the isCompleted to set
     */
    public void setCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    

    

}