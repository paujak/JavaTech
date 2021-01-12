package lt2021.sventes.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lt2021.sventes.entity.Svente;
import lt2021.sventes.service.SventeService;

@RestController
@RequestMapping("/api/sventes/")
public class SventeController {

	@Autowired
	private SventeService sventeService;
	
	@RequestMapping(method = RequestMethod.GET)
	public Collection<Svente> getSventeList() {
		return this.sventeService.getSventeList();
	}
	@RequestMapping(value = "/{name}", method = RequestMethod.GET)
	public Svente getSventeByName(@PathVariable("name") String name) {
		return this.sventeService.getSventeByName(name);
	}
	@RequestMapping(value = "/{name}", method = RequestMethod.DELETE)
    public void removeSvente(@PathVariable("name") String name) {
    	this.sventeService.removeSvente(name);
    }
	
	@RequestMapping(value = "/{name}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateSvente(@PathVariable("name") String name, @RequestBody Svente svente) {
		this.sventeService.updateSvente(name, svente);
	}
	@RequestMapping(value = "/post", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void idetiSventeToDb(@RequestBody Svente svente) {
		this.sventeService.idetiSventeToDb(svente);
	}
}
