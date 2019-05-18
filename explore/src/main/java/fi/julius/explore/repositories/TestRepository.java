package fi.julius.explore.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import fi.julius.explore.entities.Test;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "test", path = "test")
public interface TestRepository extends CrudRepository<Test, Long>{
    
}