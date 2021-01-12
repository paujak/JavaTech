package lt2021.sventes.entity;

public class Valstybe {
	
	private String pavadinimas;
	private String veliava;
	private String prezidentas;
	
	public Valstybe(String pavadinimas, String veliava, String prezidentas) {
		super();
		this.pavadinimas = pavadinimas;
		this.veliava = veliava;
		this.prezidentas = prezidentas;
	}

	public String getPavadinimas() {
		return pavadinimas;
	}

	public void setPavadinimas(String pavadinimas) {
		this.pavadinimas = pavadinimas;
	}

	public String getVeliava() {
		return veliava;
	}

	public void setVeliava(String veliava) {
		this.veliava = veliava;
	}

	public String getPrezidentas() {
		return prezidentas;
	}

	public void setPrezidentas(String prezidentas) {
		this.prezidentas = prezidentas;
	}
	
	
	
}
