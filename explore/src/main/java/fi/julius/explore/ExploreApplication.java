package fi.julius.explore;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.julius.explore.entities.Todo;
import fi.julius.explore.repositories.TodoRepository;

@SpringBootApplication
@Controller
//Cannot use @RestController due to angular routing workaround
//https://stackoverflow.com/questions/43913753/spring-boot-with-redirecting-with-single-page-angular2
@CrossOrigin
public class ExploreApplication implements ErrorController {

	@Autowired
	TodoRepository todoRepository;

	@RequestMapping("/resource")
	public Map<String,Object> home() {
	  Map<String,Object> model = new HashMap<String,Object>();
	  model.put("id", UUID.randomUUID().toString());
	  model.put("content", "Hello World");
	  return model;
	}

	@RequestMapping("/generate")
	public String generate(){
		List<Todo> todos = new ArrayList<>();
		todos.add(new Todo("eka", false));
		todos.add(new Todo("toka", true));
		todos.add(new Todo("kolmas", false));
		todoRepository.saveAll(todos);
		return "Data generated";
	}

	@RequestMapping("/user")
	public Principal user(Principal user) {
		return user;
	}

	public static void main(String[] args) {
		SpringApplication.run(ExploreApplication.class, args);
	}

	private static final String PATH = "/error";

	@RequestMapping(value = PATH)
	public String error() {
		return "forward:/index.html";
	}

	@Override
	public String getErrorPath() {
		return PATH;
	}

}
