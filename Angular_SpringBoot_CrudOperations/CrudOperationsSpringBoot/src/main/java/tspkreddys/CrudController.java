package tspkreddys;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin()
public class CrudController {
	
	@Autowired
	private CrudRepository crudRepository;
	
	@PostMapping("/save")
	public List<String> Save(@RequestBody CrudModel crudModel) {
		
		ArrayList<String> list=new ArrayList<>();
		
		if(Boolean.TRUE.equals(crudRepository.existsById(crudModel.getId()))) {
		
		crudRepository.save(crudModel); 
		list.add("updated the details at the id "+crudModel.getId());		
		
		}
		else {
			crudRepository.save(crudModel); 
			list.add("saved");	
		}
		
		return list;
	}
	
	@PostMapping("/fetch")
	public List<String> Fetch(@RequestBody CrudModel crudModel) {
		
		ArrayList<String> list=new ArrayList<>();
		
		if(Boolean.TRUE.equals(crudRepository.existsById(crudModel.getId()))) {
		
			Optional<CrudModel> fetchlist= crudRepository.findById(crudModel.getId()); 
		
			list.add(fetchlist.get().getName());	
			list.add(fetchlist.get().getEmail());	
		
		}
		
		
		return list;
	}
	
	@PostMapping("/delete")
	public List<String> Delete(@RequestBody CrudModel crudModel) {
		
		ArrayList<String> list=new ArrayList<>();
		
		if(Boolean.TRUE.equals(crudRepository.existsById(crudModel.getId()))) {
		
		crudRepository.deleteById(crudModel.getId());;
		list.add("deleted the details at the id "+crudModel.getId());		
		
		}
		else {
			
			list.add("Nothing found to delete");	
		}
		
		return list;
	}
	
	
	@GetMapping("/getData")
	public List<CrudModel> getData() {		
		
		return crudRepository.findAll();		
	}

}
