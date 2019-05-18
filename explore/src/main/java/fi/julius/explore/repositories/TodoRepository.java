package fi.julius.explore.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import fi.julius.explore.entities.Todo;

@RepositoryRestResource(collectionResourceRel = "todo", path = "todo")
public interface TodoRepository extends CrudRepository<Todo, Integer>{
    
}