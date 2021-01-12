package lt2021.sventes.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt2021.sventes.dao.SimulatedSventesDB;
import lt2021.sventes.dao.SventesDao;
import lt2021.sventes.entity.Svente;

import org.springframework.beans.factory.annotation.Qualifier;


@Service
public class SventeService {
	
	@Autowired
	@Qualifier("simulatedDB")
	private SventesDao sventesListDao;
	
	public Collection<Svente> getSventeList() {
		return this.sventesListDao.getSventeList();
	}
	
	public Svente getSventeByName(String name) {
		return this.sventesListDao.getSventeByName(name);
	}
	
    public void removeSvente(String name) {
    	this.sventesListDao.removeSvente(name);
    }
	
	public void updateSvente(String name, Svente svente) {
		this.sventesListDao.updateSvente(name, svente);
	}
	
	public void idetiSventeToDb(Svente svente) {
		this.sventesListDao.idetiSventeToDb(svente);
	}
}
