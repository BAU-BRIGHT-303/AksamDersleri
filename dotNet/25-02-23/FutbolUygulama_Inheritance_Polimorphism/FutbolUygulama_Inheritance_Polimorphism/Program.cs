namespace FutbolUygulama_Inheritance_Polimorphism
{
	internal class Program
	{
		static void Main(string[] args)
		{
			List<Futbolcu> takim = new List<Futbolcu>();
			takim.Add(new Futbolcu("Kaleci", 1));
			takim.Add(new Defans("Defans1", 2));
			takim.Add(new Defans("Defans2", 3));
			takim.Add(new Defans("Defans3", 4));
			takim.Add(new Defans("Defans4", 5));
			takim.Add(new OrtaSaha("OrtaSaha1", 6));
			takim.Add(new OrtaSaha("OrtaSaha2", 7));
			takim.Add(new OrtaSaha("OrtaSaha3", 8));
			takim.Add(new OrtaSaha("OrtaSaha4", 9));
			takim.Add(new Forvet("Serhat", 10));
			takim.Add(new Forvet("Yiğit", 11));
			Random random = new Random();
			bool golMu = true;
			int FormaNo = random.Next(1, 12);
			int PasKontrol = 12;
			for (int i = 0; i < 3; i++)
			{
				while (PasKontrol == FormaNo)
				{
					FormaNo = random.Next(1, 12);
				}
				PasKontrol = FormaNo;
				if (!takim[FormaNo-1].PasVer())
				{
					golMu = false;
					Console.WriteLine($"{FormaNo} Forma Numaralı Oyuncunun  Pası Geçmedi");
					break;
				}
				else
				{
					if(i == 2)
					{
						Console.WriteLine($"{FormaNo} Forma Numaralı Oyuncunun Topu Aldı Gole Gidiyor");
					}
					else
					{
						Console.WriteLine($"{FormaNo} Forma Numaralı Oyuncu  Pası Başarılı");
					}
					
					Console.ReadKey();
				}
			}
			if (golMu)
			{
				if (takim[FormaNo-1].GolVurus())
				{
					Console.WriteLine("GOL OLDU");
				}
				else
				{
					Console.WriteLine("Az Farkla Kaçtı");
				}
			}


		}
	}
}