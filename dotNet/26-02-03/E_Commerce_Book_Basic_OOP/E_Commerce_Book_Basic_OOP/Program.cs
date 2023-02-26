namespace E_Commerce_Book_Basic_OOP
{
	internal class Program
	{
		static void Main(string[] args)
		{
			List<Urun> sepet = new List<Urun>();
			bool addToCart = true;
			while(addToCart == true)
			{
				Console.WriteLine("Sepet Eklemek İstediğiniz Ürün Tipini Seçi iz:\n1-Kitap\n2-Film");
				Console.Write("Seçiminiz:");
				string secim = Console.ReadLine();
				Console.WriteLine();

				switch (secim)
				{
					case "1":
						Console.Write("Kitap Adı: ");
						string kitapAdi = Console.ReadLine();
						Console.Write("Kitap Yazarı: ");
						string yazarAdi = Console.ReadLine();
						Console.Write("Kitap Fiyatı: ");
						double kitapFiyat = double.Parse(Console.ReadLine());
						Console.Write("Kitap ISBN No: ");
						string isbn = Console.ReadLine();
						Kitap kitap = new Kitap(kitapAdi,kitapFiyat, yazarAdi, isbn);
						sepet.Add(kitap);
						break;
						case "2":
						Console.Write("Film Adı: ");
						string filmAdi = Console.ReadLine();
						Console.Write("Film Yönetmeni: ");
						string yonetmen = Console.ReadLine();
						Console.Write("Film Fiyatı: ");
						double filmFiyat = double.Parse(Console.ReadLine());
						Console.Write("Oyuncular: ");
						string oyuncular = Console.ReadLine();
						Film film = new Film(filmAdi, filmFiyat,yonetmen,oyuncular);
						sepet.Add(film);
						break;
					default:
						Console.WriteLine("Geçersiz Seçim Yaptınız...");
						break;

				}


				Console.WriteLine("Devam Etmek İstiyor Musunuz?\t-E\t-H");
				Console.Write("Seçiminiz: ");
				string cevap = Console.ReadLine();
				if (cevap.ToUpper() == "H")
				{
					addToCart = false;
				}

			}
			Console.WriteLine();
			Console.WriteLine("Sepetinizdeki Ürünler");
			foreach (Urun urun in sepet)
			{
				Console.WriteLine();
				Console.WriteLine("******************");
				Console.WriteLine(urun.DetayGoster());
			}
			Console.WriteLine("******************");
			Sepet cart = new Sepet();
			double toplamTutar = cart.ToplamTutar(sepet);
			Console.WriteLine("Toplam Alışveriş Tutarı: " + toplamTutar+ " TL");
		}
	}

	abstract class Urun
	{
		public string Adi { get; set; }
		public double Fiyat { get; set; }

		public Urun(string adi, double fiyat)
		{
			Adi = adi;
			Fiyat = fiyat;
		}

		public virtual string DetayGoster()
		{
			return Adi + "-" + Fiyat+ "₺";
		}
	}

	class Kitap: Urun
	{
		public string Yazar { get; set; }
		public string ISBN { get; set; }

		public Kitap(string adi, double fiyat,string yazar, string ıSBN): base(adi,fiyat)
		{
			Yazar = yazar;
			ISBN = ıSBN;
		}

		public override string DetayGoster()
		{
			return Adi + "-" + Yazar + "-" + Fiyat+" TL";
		}
	}

	class Film: Urun
	{
		public string Yonetmen { get; set; }
		public string Oyuncular { get; set; }

		public Film(string adi, double fiyat,string yonetmen, string oyuncular):base(adi,fiyat)
		{
			Yonetmen = yonetmen;
			Oyuncular = oyuncular;
		}

		public override string DetayGoster()
		{
			return Adi + "-" + Yonetmen + "-" + Fiyat + "TL";
		}
	}

	class Sepet
	{
		public double ToplamTutar(List<Urun> sepet)
		{
			double totalPrice = 0;
			foreach (Urun urun in sepet)
			{
				totalPrice += urun.Fiyat;
			}
			return totalPrice;
		}

	}
}