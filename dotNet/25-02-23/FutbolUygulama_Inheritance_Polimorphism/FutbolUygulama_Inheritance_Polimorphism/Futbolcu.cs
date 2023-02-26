using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace FutbolUygulama_Inheritance_Polimorphism
{
	internal class Futbolcu
	{
		public Random rnd = new Random();
		public string AdSoyad { get; set; }
		public int FormaNo { get; set; }
		public int Hiz { get; set; }
		public int Dayaniklilik { get; set; }
		public int Pas { get; set; }
		public int Sut { get; set; }
		public int Yetenek { get; set; }
		public int DogalForm { get; set; }
		public int Kararlilik { get; set; }
		public int Sans { get; set; }
		public Futbolcu()
		{

		}

		public virtual bool PasVer()
		{
			double PasSkor = Pas * 0.3 + Yetenek * 0.3 + Dayaniklilik * 0.1 + DogalForm * 0.1 + Sans * 0.2;
			if (PasSkor >= 60)
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		public virtual bool GolVurus()
		{
			double GolSkor = Yetenek * 0.3 + Sut * 0.2 + Kararlilik * 0.1 + DogalForm * 0.1 + Hiz * 0.1 + Sans * 0.2;
			if (GolSkor>=70)
			{
				return true;
			}
			else
			{
				return false;
			}

		}
		public Futbolcu(string AdSoyad, int FormaNo)
		{
			this.AdSoyad = AdSoyad;
			this.FormaNo = FormaNo;
			Hiz = rnd.Next(50, 101);
			Dayaniklilik = rnd.Next(50, 101);
			Pas = rnd.Next(50, 101);
			Sut = rnd.Next(50, 101);
			Yetenek = rnd.Next(50, 101);
			Kararlilik = rnd.Next(50, 101);
			DogalForm = rnd.Next(50, 101);
			Sans = rnd.Next(50, 101);
		}
	}
	class Defans : Futbolcu
	{
		public int PozisyonAlma { get; set; }
		public int Sicrama { get; set; }
		public int Kafa { get; set; }

		public Defans(string AdSoyad, int FormaNo)
		{
			this.AdSoyad = AdSoyad;
			this.FormaNo = FormaNo;
			Hiz = rnd.Next(50, 91);
			Dayaniklilik = rnd.Next(50, 91);
			Pas = rnd.Next(50, 91);
			Sut = rnd.Next(50, 91);
			Yetenek = rnd.Next(50, 91);
			Kararlilik = rnd.Next(50, 91);
			DogalForm = rnd.Next(50, 91);
			Sans = rnd.Next(50, 91);
			PozisyonAlma = rnd.Next(50, 91);
			Sicrama = rnd.Next(50, 91);
			Kafa = rnd.Next(50, 91);
		}

		public override bool PasVer()
		{
			double PasSkor = Pas * 0.2 + Yetenek * 0.3 + Dayaniklilik * 0.1 + DogalForm * 0.1 + PozisyonAlma * 0.1 + Sans *
0.2;
			if (PasSkor >= 60)
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		public override bool GolVurus()
		{
			double GolSkor = Yetenek * 0.3 + Sut * 0.2 + Kararlilik * 0.1 + DogalForm * 0.1 + Kafa * 0.1 + Sicrama * 0.1 + Sans *
0.1
;
			if (GolSkor >= 70)
			{
				return true;
			}
			else
			{
				return false;
			}

		}


	}
	class OrtaSaha : Futbolcu
	{
		public int UzunTop { get; set; }
		public int IlkDokunus { get; set; }
		public int Uretkenlik { get; set; }
		public int TopSurme { get; set; }
		public int OzelYetenek { get; set; }

		public OrtaSaha(string AdSoyad, int FormaNo)
		{
			this.AdSoyad = AdSoyad;
			this.FormaNo = FormaNo;
			Hiz = rnd.Next(60, 101);
			Dayaniklilik = rnd.Next(60, 101);
			Pas = rnd.Next(60, 101);
			Sut = rnd.Next(60, 101);
			Yetenek = rnd.Next(60, 101);
			Kararlilik = rnd.Next(60, 101);
			DogalForm = rnd.Next(60, 101);
			Sans = rnd.Next(60, 101);
			UzunTop = rnd.Next(60, 101);
			TopSurme = rnd.Next(60, 101);
			OzelYetenek = rnd.Next(60, 101);
		}

		public override bool PasVer()
		{
			double PasSkor = Pas * 0.3 + Yetenek * 0.2 + OzelYetenek * 0.2 + Dayaniklilik * 0.1 + DogalForm * 0.1 + UzunTop
* 0.1 + TopSurme * 0.1 + Sans * 0.1;
			if (PasSkor >= 60)
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		public override bool GolVurus()
		{
			double GolSkor = Yetenek * 0.3 + OzelYetenek * 0.2 + Sut * 0.2 + IlkDokunus * 0.1 + Kararlilik * 0.1 + DogalForm *
0.1 + Sans * 0.1
;
			if (GolSkor >= 70)
			{
				return true;
			}
			else
			{
				return false;
			}

		}
	}

	class Forvet : Futbolcu
	{
		public int Bitiricilik { get; set; }
		public int IlkDokunus { get; set; }
		public int Kafa { get; set; }
		public int OzelYetenek { get; set; }

		public Forvet(string AdSoyad, int FormaNo)
		{
			this.AdSoyad = AdSoyad;
			this.FormaNo = FormaNo;
			Hiz = rnd.Next(70, 101);
			Dayaniklilik = rnd.Next(70, 101);
			Pas = rnd.Next(70, 101);
			Sut = rnd.Next(70, 101);
			Yetenek = rnd.Next(70, 101);
			Kararlilik = rnd.Next(70, 101);
			DogalForm = rnd.Next(70, 101);
			Sans = rnd.Next(70, 101);
			IlkDokunus = rnd.Next(70, 101);
			Bitiricilik = rnd.Next(70, 101);
			IlkDokunus = rnd.Next(70, 101);
			Kafa = rnd.Next(70, 101);
			OzelYetenek = rnd.Next(70, 101);
		}

	public override bool PasVer()
	{
		double	PasSkor = Pas * 0.3 + Yetenek * 0.2 + OzelYetenek * 0.2 + Dayaniklilik * 0.1 + DogalForm * 0.1 + Sans * 0.1;
		if (PasSkor >= 60)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

		public override bool GolVurus()
		{
			double GolSkor = Yetenek * 0.2 + OzelYetenek * 0.2 + Sut * 0.1 + Kafa * 0.1 + IlkDokunus * 0.1 + Bitiricilik * 0.1 + Kararlilik * 0.1 + DogalForm * 0.1 + Sans * 0.1

;
			if (GolSkor >= 70)
			{
				return true;
			}
			else
			{
				return false;
			}

		}

	}
}
