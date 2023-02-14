namespace Loops_Example
{
	internal class Program
	{
		static void Main(string[] args)
		{
			/*Kullanıcının girdiği iki sayı arasında bulunan 3 ile bölümebilen tam sayıların listesini, toplamını ve ortalamasını ayrı ayrı gösteren bir konsol uygulaması*/

			//Console.Write("Lütfen ilk sayıyı giriniz: ");
			//int sayi1 = int.Parse(Console.ReadLine());
			//Console.Write("Lütfen ikinci sayıyı giriniz: ");
			//int sayi2 = int.Parse(Console.ReadLine());

			//int ortalama = 0;
			//int toplam = 0;
			//int sayac = 0;
			//int temp = 0;

			//// bu örnek ile her zaman sayı2'yi küçük hale getirmiş olduk. Kullanıcı istediği sırayla sayı girişi yapabilir.
			//if(sayi1 < sayi2)
			//{
			//	temp = sayi1;
			//	sayi1 = sayi2;
			//	sayi2 = temp;
			//}

			//for (int i = sayi2; i < sayi1; i++)
			//{
			//	if (i % 3 == 0)
			//	{
			//		sayac++;
			//		toplam += i;

			//		if(sayac == 1)
			//		{
			//			Console.Write(i);
			//		}
			//		else
			//		{
			//			Console.Write(", " + i);
			//		}

			//	}
			//}
			//Console.WriteLine();
			//if (sayac != 0)
			//{
			//	ortalama = toplam / sayac;
			//	Console.WriteLine($"Girmiş olduğunuz {sayi1} ve {sayi2} değerleri arasındaki 3'e bölünebilen toplam {sayac} kadar sayı bulunmaktadır. Bu sayıların toplamı {toplam}'dır. Ve ortalaması {ortalama}'dır. ");
			//}
			//else
			//{
			//	Console.WriteLine("Bu aralıkta 3'e bölünebilen bir sayı bulunmamaktadır");
			//}

			//Çarpım Tablosu

			
				for (int osman = 1; osman < 10; osman ++)
				{
					
					for (int mahmut = 1; mahmut < 11; mahmut++)
					{
						Console.Write($"{osman} x {mahmut} = {osman*mahmut} \t");
					
						Console.Write($"{osman+1} x {mahmut} = {(osman+1) * mahmut} \t");
					
						Console.Write($"{osman+2} x {mahmut} = {(osman+2) * mahmut} \t");
						Console.WriteLine();
						
					}
				osman = osman + 2;
				Console.WriteLine();
				}
			}
		}
	}
