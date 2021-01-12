package lt2021.sventes.entity;

public class Svente {

	private String pavadinimas;
	private String aprasymas;
	private String imageSrc;
	private SventesTipas tipas;
	private boolean arKeltiVeliava; 
	
	public Svente(String pavadinimas, String aprasymas, String imageSrc, SventesTipas tipas, boolean arKeltiVeliava) {
		super();
		this.pavadinimas = pavadinimas;
		this.aprasymas = aprasymas;
		this.imageSrc = imageSrc;
		this.tipas = tipas;
		this.arKeltiVeliava = arKeltiVeliava;
	}

	public String getPavadinimas() {
		return pavadinimas;
	}

	public void setPavadinimas(String pavadinimas) {
		this.pavadinimas = pavadinimas;
	}

	public String getAprasymas() {
		return aprasymas;
	}

	public void setAprasymas(String aprasymas) {
		this.aprasymas = aprasymas;
	}

	public String getImageSrc() {
		return imageSrc;
	}

	public void setImageSrc(String imageSrc) {
		this.imageSrc = imageSrc;
	}

	public SventesTipas getTipas() {
		return tipas;
	}
	
	public void setTipas(SventesTipas tipas) {
		this.tipas = tipas;
	}

	public boolean arKeltiVeliava() {
		return arKeltiVeliava;
	}

	public void setKeltiVeliava(boolean arKeltiVeliava) {
		this.arKeltiVeliava = arKeltiVeliava;
	}
}
