namespace Functions
{
	internal class Program
	{
		static void Main(string[] args)
		{
			//DRY --> DONT REPEAT URSELF
			// 1 - Bu alanda geri değer döndürmeyen ve parametre almayan bir metot tetiklenmiştir.
			//AlanHesapla();

			//// 2 - Bu alanda geri değer döndüren ve parametre almayan bir metot tetiklenecektir.
			//Console.WriteLine(AlanHesapla2() + " m²");

			// 3 - Bu alanda geri değer döndüren ve parametre alan bir metot tetiklenmektedir.
			//Console.Write("Please enter the short edge: ");
			//int shortEdge = int.Parse(Console.ReadLine());
			//Console.Write("Please enter the long edge: ");
			//int longEdge = int.Parse(Console.ReadLine());
			//Console.WriteLine(AlanHesapla3(shortEdge, longEdge));


			// 4 - Bu alanda geri değer döndürmeyen ve parametre alan bir metot tetiklenmiştir.
			//Console.Write("Please enter the short edge: ");
			//int shortEdge = int.Parse(Console.ReadLine());
			//Console.Write("Please enter the long edge: ");
			//int longEdge = int.Parse(Console.ReadLine());
			//AlanHesapla4(shortEdge, longEdge);
		}

		//Sınıf segmentinde metotları yazıyor olacağız. 
		#region GERİ DEĞER DÖNDÜRMEYEN VE PARAMETRE ALMAYAN METOTLAR
		//Geri Değer Döndürmüyorsa Void yazıp geçiyoruz.
		public static void AlanHesapla()
		{
			Console.Write("Please enter the short edge: ");
			int shortEdge = int.Parse(Console.ReadLine());
			Console.Write("Please enter the long edge: ");
			int longEdge = int.Parse(Console.ReadLine());
			int area = shortEdge * longEdge;
			Console.WriteLine($"Short Edge: {shortEdge}, Long Edge: {longEdge}. And the area is: {area} m²");
		}
		#endregion

		#region Geri Değer Döndüren ve Parametre Almayan Metot
		public static int AlanHesapla2()
		{
			Console.Write("Please enter the short edge: ");
			int shortEdge = int.Parse(Console.ReadLine());
			Console.Write("Please enter the long edge: ");
			int longEdge = int.Parse(Console.ReadLine());
			int area = shortEdge * longEdge;
			return area;
		}

		#endregion

		#region Geri Değer Döndüren ve Parametre Alan

		public static int AlanHesapla3(int kk, int uk)
		{
			int alan = kk * uk;
			return alan;
		}

		#endregion

		#region Geri Değer Döndürmeyen ve Parametre Alan
		public static void AlanHesapla4(int se, int le)
		{
			int alan = se * le;
			Console.WriteLine(alan + " m²");
		}
		#endregion






	}
}