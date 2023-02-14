using System;

namespace Arrays
{
	internal class Program
	{
		static void Main(string[] args)
		{
			//Array'ler -Diziler-

			//string[] array = new string[5];

			//array[0] = "Barbaros";
			//array[1] = "Paşa";
			//array[2] = "Onur";
			//array[3] = "Enes";
			//array[4] = "Serhat";

			//Console.WriteLine(array[0]);
			//Console.WriteLine(array[1]);
			//Console.WriteLine(array[2]);
			//Console.WriteLine(array[3]);
			//Console.WriteLine(array[4]);
			//Console.WriteLine("************");

			//for (int i = 0; i < array.Length; i++)
			//{
			//	Console.WriteLine(array[i]);
			//}

			//Console.WriteLine("***************");

			//foreach (var osman in array)
			//{
			//	Console.WriteLine(osman);
			//}

			//ikinci stil arraye eleman atama
			//int[] diziInt = { 1, 2, 3, 5, 4, 8, 9 };
			//Console.WriteLine(diziInt[5]);


			//Kullanıcıdan x inputu gelmediği sürece rastgele sayı üreten bir uygulama yazınız.
			//while (true)
			//{
			//	Random rnd = new Random();
			//	int sayi = rnd.Next(1,100);
			//	Console.Write("Lütfen Bir Değer Giriniz: ");
			//	string deger = Console.ReadLine();
			//	if (deger == "x")
			//	{
			//		break;
			//	}
			//	else
			//	{
			//		Console.WriteLine(sayi);
			//	}
			//}


			//50 elemanlı bir diziye 252 ile 348 arasında bir değer ataması yapıp bunu yanyana yazdıran bir uygulama yapınız.

			//int[] arr1 = new int[50];
			//Random rastgele = new Random();

			//for (int i = 0; i < arr1.Length; i++)
			//{
			//	arr1[i] = rastgele.Next(252, 348);
			//	if(i==0)
			//	{
			//		Console.Write(arr1[i]);
			//	}
			//	else
			//	{
			//		Console.Write(", "+ arr1[i]);
			//	}

			//}

			//Rastgele üretilen 1,50 arasındaki sayılardan 6 elemanlı bir diziye eleman ataması gerçekleştirelim. Sonrasınd bu elemanları alt alta yazdıralım. Sonra bu sayıları küçükten büyüğe sıralayıp alt alta yazdıralım. Sonra da bu sırayı tam tersine çevirelim tekrar yazdıralım.
			//
			//int[] array1 = new int[6];
			//Console.WriteLine("Dizinin Orijinal Hali");
			//for (int i = 0; i < array1.Length; i++)
			//{
			//	Random rnd = new Random();
			//	array1[i] = rnd.Next(1,50);
			//	Console.WriteLine(array1[i]);
			//}
			//Console.WriteLine();
			//Console.WriteLine("Dizinin Sıralanmış Hali");
			//Array.Sort(array1);
			//foreach (var item in array1)
			//{
			//	Console.WriteLine(item);	
			//}
			//Console.WriteLine();
			//Console.WriteLine("Dizinin Ters Çevrilmiş Hali");
			//Array.Reverse(array1);
			//foreach (var item in array1)
			//{
			//	Console.WriteLine(item);
			//}


			// 15 elemanlı bir diziye -52'den 128'e kadar random sayılar atayan ve bu dizinin elemanlarından pozitif, negatif ve sıfır olan sayılardan kaç tane atandığını gösteren bir konsol uygulaması yapalım.
			//int[] array = new int[15];
			//int positive = 0;
			//int negative = 0;
			//int zero = 0;

			//Random rnd = new Random();

			//for (int i = 0; i < array.Length; i++)
			//{
			//	int sayi = rnd.Next(-52, 128);
			//	array[i] = sayi;
			//	Console.WriteLine(array[i]);
			//	if (array[i]<0)
			//	{
			//		negative++;
			//	}
			//	else if (array[i]>0) 
			//	{
			//		positive++;
			//	}
			//	else
			//	{
			//		zero++;
			//	}
			//}
			//Console.WriteLine($"Bu dizide {positive} adet pozitif, {negative} adet negatif, {zero} adet sıfır sayısı bulunmaktadır.");

			// 5 elemanlı bir dizide (dizinin elemanlarını istediğiniz gibi atayabilirsiniz) Kullanıcının girmiş olduğu sayının dizide olup olmadığını bulan var ise kaç adet olduğunu gösteren bir uygulama yazınız
			int[] arr1 = new int[5];
			Random rnd = new Random();
			int counter = 0;
			for (int i = 0; i < arr1.Length; i++)
			{
				arr1[i] = rnd.Next(0, 10);
			}
			Console.WriteLine("Dizimiz");
			foreach (var item in arr1)
			{
				
				Console.WriteLine(item);
			}
				Console.WriteLine("******");

			Console.Write("Lütfen Bir Tahminde Bulununuz: ");
			int tahmin = int.Parse(Console.ReadLine());

			for (int i = 0; i < arr1.Length; i++)
			{
				if (arr1[i] == tahmin)
				{
					counter++;
				}
			}
			Console.WriteLine($"Tahmin etmiş olduğunuz {tahmin} sayısı dizide {counter} adet bulunmaktadır");
		}
	}
}