package fi.julius.explore.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import fi.julius.explore.entities.Todo;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "todo", path = "todo")
public interface TodoRepository extends CrudRepository<Todo, Integer>{
    @RestResource
    public List<Todo> findByTitle(@Param("title") String title);
}