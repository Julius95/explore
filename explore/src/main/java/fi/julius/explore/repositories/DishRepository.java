package fi.julius.explore.repositories;

import fi.julius.explore.entities.Dish;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "dish", path = "dish")
public interface DishRepository extends PagingAndSortingRepository<Dish, Integer> {
}
