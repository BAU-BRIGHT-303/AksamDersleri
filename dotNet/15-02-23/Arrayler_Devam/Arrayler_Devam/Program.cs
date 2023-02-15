namespace Arrayler_Devam
{
	internal class Program
	{
		static void Main(string[] args)
		{
			// 3 ADET PERSONELİN NUMARA, İSİM, EMAİL, gsm BİLGİLERİNİ AYRI AYRI DİZİLERDE TUTULDUĞU VE ARANACAK KİŞİNİN PERSONEL NUMARASINA GÖRE İLGİLİ PERSONELİN TÜM ÖZELLİKLERİNİ GÖSTEREN BİR KOD BLOK'U YAZALIM.

			//string[] personelNo = { "1", "2", "3" };
			//string[] personelName = { "Barbaros", "Fevzi", "Murat" };
			//string[] personelMail = { "b.ciga@gmail.com", "f.cakir@gmail.com", "kob.murat@gmail.com" };
			//string[] personelGSM = { "05348516870", "0534346870", "053485qwe126870" };
			//basla:
			//Console.Write("Lütfen bir personel numarası giriniz: ");
			//string input = Console.ReadLine();
			//int indexNo = Array.IndexOf(personelNo,input);

			//if (indexNo == -1)
			//{
			//	Console.Clear();
			//	Console.ForegroundColor= ConsoleColor.Red;
			//	Console.WriteLine("Böyle Bir Kullanıcı Malesef Bulunamadı :(");
			//	Console.ForegroundColor = ConsoleColor.White;
			//	goto basla;
			//}
			//else
			//{
			//	Console.Clear();
			//	Console.WriteLine($"Personel No:\t{personelNo[indexNo]}\nPersonel Adı:\t{personelName[indexNo]}\nPersonel Mail:\t{personelMail[indexNo]}\nPersonel GSM:\t{personelGSM[indexNo]}\n");
			//}

			int[] numberArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

			//arrayin barındırdığı eleman sayısını görüntüleme metodu
			//Console.WriteLine(numberArray.Length);

			//İstediğimiz index no üzerinden değer atama metodu
			//numberArray.SetValue(25, 0);
			//Console.WriteLine(numberArray[0]);
			//numberArray[0] = 25;
			//int deger = Convert.ToInt32(Console.ReadLine());
			//numberArray.SetValue(deger, 0);
			//numberArray[0] = deger;

			//İstediğimiz aralıktaki değerleri temizleme (defult değerlere döndürme) işlemi için Clear metodu kullanılır.
			//foreach (int i in numberArray) 
			//{
			//	Console.WriteLine(i); 
			//}
			//Console.WriteLine();
			//Console.WriteLine("Clear metodu sonrası");
			Array.Clear(numberArray, 2, 3);
			//foreach (int i in numberArray) 
			//{ 
			//	Console.WriteLine(i); 
			//}

			//Copy Metodu

			//Dizinin istenen eleman aralığında başka bir diziye kopyalama işlerine yarar.
			//
			int[] newArr = new int[10];

			Array.Copy(numberArray, newArr, 10);
			//foreach (var item in newArr)
			//{
			//	Console.Write(item+",");
			//}

			//Multi_Dimensional_Arrays
			// 2 Boyutlu Diziler
			//
			//int[,] array2D = new int[2,3];

			//array2D[0, 0] = 1;
			//array2D[0, 1] = 2;
			//array2D[0, 2] = 3;
			//array2D[1, 0] = 4;
			//array2D[1, 1] = 5;
			//array2D[1, 2] = 6;

			//int[,] arrayIkiD =
			//{
			//	{1,2,3 },
			//	{4,5,6}
			//};

			//for (int i = 0; i < array2D.GetLength(0); i++)
			//{
			//	for (int j = 0; j < array2D.GetLength(1); j++)
			//	{
			//		Console.Write(array2D[i,j] + "\t");
			//	}
			//	Console.WriteLine();
			//}


			//3 Boyutlu Diziler

			//int[,,] array3D =
			//{
			//	{
			//		{ 1, 2,3},
			//		{4,5,6}
			//	},
			//	{
			//		{ 7, 8,9},
			//		{10,11,12}
			//	},

			//	{
			//		{ 12, 12,12},
			//		{15,15,15}
			//	},
			//};


			//Örnek satır ve sütun sayısı kullanıcı tarafından belirlenen bir dizi oluşturulacak. Ve değerleri random şekilde atanacak.

			Console.Write("Lütfen Bir Satır Değeri Giriniz: ");
			int satir = int.Parse(Console.ReadLine());

			Console.Write("Lütfen Bir Sütun Değeri Giriniz: ");
			int sutun = int.Parse(Console.ReadLine());

			int[,] dizi = new int[satir, sutun];

			Random rnd = new Random();

			for (int i = 0; i < satir; i++)
			{
				for (int j = 0; j < sutun; j++)
				{
					dizi[i, j] = rnd.Next(1, 50);
					Console.Write(dizi[i,j] + "\t");
				}
				Console.WriteLine();
			}
		}
	}
}