package lt2021.sventes.dao;

import java.util.Collection;

import lt2021.sventes.entity.Svente;


public interface SventesDao {

	Collection<Svente> getSventeList();
	
    Svente getSventeByName(String name);

    void removeSvente(String name);

    void updateSvente(String name, Svente svente);

    void idetiSventeToDb(Svente svente);
}
