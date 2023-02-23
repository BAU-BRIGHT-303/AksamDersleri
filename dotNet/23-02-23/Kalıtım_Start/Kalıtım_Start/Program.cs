namespace Kalıtım_Start
{
	internal class Program
	{
		static void Main(string[] args)
		{
			Musavir m1 = new Musavir();
			m1.Adi = "ksfd";
			Yazilimci y1 = new Yazilimci();
			y1.MedeniDurum = 0;

			y1.SeniorMi = true;
		}
	}

	class Personel
	{
		public string Adi { get; set; }
		public string Soyadi { get; set; }
		public int MedeniDurum { get; set; }
	}

	class Musavir : Personel
	{
		
	}

	class Yazilimci : Personel
	{
		public bool SeniorMi { get; set; }
	}

	class Egitmen : Personel 
	{
		
	}
}