package lt2021.sventes.dao;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import lt2021.sventes.entity.Svente;
import lt2021.sventes.entity.SventesTipas;

@Repository
@Qualifier("simulatedDB")
public class SimulatedSventesDB implements SventesDao {

private static Map<String, Svente> sventesList;
	
	static {
		sventesList = new HashMap<String, Svente> (){
			{
				put("Kaledos", new Svente("Kaledos", "Svenciama gruodzio menesi", "kaledos.png", SventesTipas.TAUTINE_RELIGINE, false));
				put("Nepriklausomybes diena", new Svente("Nepriklausomybes diena", "Valstybes nepriklausomybes atgavimo diena", "nepriklausomybe.png", SventesTipas.VALSTYBINE, true));
				put("Valstybes diena", new Svente("Valstybes diena", "Valstybes ikurimo diena", "valstybe.png", SventesTipas.VALSTYBINE, true));
				put("Jonines", new Svente("Jonines", "Vidurvasario svente", "jonines.png", SventesTipas.TAUTINE_RELIGINE, false));
				put("Valentino diena", new Svente("Valentino diena", "Isimylejeliu svente", "valentinke.png", SventesTipas.NETRADICINE, false));
				put("Programuotoju diena", new Svente("Programuotoju diena", "Tarptautine profesine programuotoju svente", "coding.png", SventesTipas.ATMINTINA_DIENA, false));
			}
		};
	}
	
	
	@Override
	public Collection<Svente> getSventeList() {
		return SimulatedSventesDB.sventesList.values();
	}

	@Override
	public Svente getSventeByName(String name) {
		return SimulatedSventesDB.sventesList.get(name);
	}

	@Override
	public void removeSvente(String name) {
		SimulatedSventesDB.sventesList.remove(name);
	}

	@Override
	public void updateSvente(String name, Svente svente) {
		Svente sventeToUpdate = SimulatedSventesDB.sventesList.get(name);
		sventeToUpdate.setTipas(svente.getTipas());
		sventeToUpdate.setImageSrc(svente.getImageSrc());
		sventeToUpdate.setAprasymas(svente.getAprasymas());
		sventeToUpdate.setKeltiVeliava(svente.arKeltiVeliava());

	}

	@Override
	public void idetiSventeToDb(Svente svente) {
		SimulatedSventesDB.sventesList.put(svente.getPavadinimas(), svente);

	}

}
