namespace Conditional_Examples
{
	internal class Program
	{
		static void Main(string[] args)
		{
			#region Soru 1
			//bir mağazadan alınan iki ürünün tutarları toplamı 250 TL'den fazla ise, ikinci ürüne yüzde 35'lik bir indirim uygulanmaktadır. Ek olarak tutar toplamı 300 TL'nin üzerinde olan her alışverişte alınan 25 TL'lik kargo bedeli alınmayacaktır. Bu duruma göre iki ürünün fiyatlarının kullanıcı tarafından girilmesini sağlayan ve ödenecek toplam tutarı hesaplayıp ekrana ayrı ayrı kalemler halinde yazdıracak olan programı kodlayınız. Çıktıda Kargo Bedeli, İndirim tutarı, Mevcut fiyatlar toplamı ve ödenecek dip toplam gösterilecektir. 

			//Console.Write("Lütfen ilk ürünün fiyatını giriniz: ");
			//double fiyat1 = double.Parse(Console.ReadLine());
			//Console.Write("Lütfen ikinci ürünün fiyatını giriniz: ");
			//double fiyat2 = double.Parse(Console.ReadLine());

			//int kargo_bedel = 25;
			//double dipToplam = 0;
			//double mevcutToplam = fiyat1+ fiyat2;
			//double indirim = 0;

			//double temp;

			//if (fiyat1< fiyat2)
			//{
			//	temp = fiyat1;
			//	fiyat1 = fiyat2;
			//	fiyat2 = temp;
			//}

			//	if (mevcutToplam>250)
			//	{
			//		indirim = fiyat2 * 0.35;
			//		double yeniToplam = mevcutToplam - indirim;
			//		if (yeniToplam>300)
			//		{
			//			dipToplam = yeniToplam;
			//			kargo_bedel = 0;
			//		}
			//		else
			//		{
			//			dipToplam = yeniToplam + kargo_bedel;
			//		}
			//	}
			//	else
			//	{
			//		dipToplam = mevcutToplam + kargo_bedel;
			//	}
			//Console.Clear();
			//Console.WriteLine($"************************************\n1-Fiyatlar Toplamı: \t{mevcutToplam} TL\n2-İndirim Tutarı: \t{indirim} TL\n3-Kargo Bedeli: \t{kargo_bedel} TL\n-------------------------------\nDip Toplam: \t{dipToplam} TL ");


			#endregion

			#region Ternary Operator
			int num1 = 10;
			int num2 = 10;
			int toplam = num1+ num2;

			if (toplam>20)
			{
				Console.WriteLine("Toplam 20'den büyüktür.");
			}
			else
			{
				Console.WriteLine("Toplam 20'den küçük ya da eşit");
			}


			Console.WriteLine("Ternary Operatör İle Yazalım");
			string mesaj = toplam > 20 ? "Toplam 20'den büyüktür." : "Toplam 20'den büyük değildir.";
			Console.WriteLine(mesaj);

			string mesaj2 = toplam > 20 ? "Toplam 20'den büyüktür." : toplam == 20 ? "Toplam 20'ye eşittir" : "Toplam 20'den küçüktür";
			Console.WriteLine(mesaj2);
			#endregion
		}
	}
}