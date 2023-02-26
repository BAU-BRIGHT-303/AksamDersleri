namespace Listelere_Giris_Kalıtım
{
	internal class Program
	{
		static void Main(string[] args)
		{
			/*Sıkça karşılacağımız collection yapısıdır. Yine uzunluk bağımsız kullanımları mevcuttur. Dizilerden farklı olarak Listler dinamik boyutlu olabilmektedir. Eleman sayısını önceden belirtmek zorunda değiliz.
			 
			List Yapısını Nasıl Kullanıyoruz?
			Collections.Generic usinge eklenerek kullanılabilir. --namespace alanı-- Daha sonrasında List yapımızı kullanmak için 
			List<verituru> degiskenadi = new List<verituru>();
			 */

			//List<string> isimler = new List<string>();
			//isimler.Add("Barbaros");
			//isimler.Add("Fevzi");
			//isimler.Add("Enes");
			//isimler.Add("Paşa");
			
			//Console.WriteLine("İsimler");
			//foreach (var item in isimler)
			//{
			//	Console.WriteLine(item);
			//}

			/*List yapısı metotları
			 Add() --> Ekleme
			Count: Eleman sayısı
			Clear() ---> Temizler
			Contains() --> İçerir mi
			IndexOf() --> Kaçıncı indexte olduğu
			Remove() --> Elemanı siliyor
			Sort() --> Sıralama
			 */

			//Bir string tipi liste oluşturun, listeye karpuz, kavun, kivi, domates, salatalık. İçersin.

			// Bu listenin eleman sayısını yazdıralım, "kavun'un listede olup olmadığını kontrol edelim, "kiviyi listeden yok edelim, "listenin tüm elemanlarını büyük harfler kullanarak ekrana yazdıralım, alfanumerik olarak sıralama yapalım.

			//List<string> meyveler = new List<string>();
			//meyveler.Add("karpuz");
			//meyveler.Add("kavun");
			//meyveler.Add("kivi");
			//meyveler.Add("domates");
			//meyveler.Add("salatalık");
			//foreach (var item in meyveler)
			//{
			//	Console.WriteLine(item.ToUpper());
			//}
			//Console.WriteLine();
			//Console.WriteLine(meyveler.Count + " Meyve Sayısı");
			//Console.WriteLine(meyveler.Contains("kavun"));
			//meyveler.Remove("kivi");
			//meyveler.Sort();
			//foreach (var item in meyveler)
			//{
			//	Console.WriteLine(item.ToUpper());
			//}

			//Öğrencinin adını soyadını numarasını ve notunu girdiği. Bu bilgileri bir classta tuttuğu ve koleksiyonda sakladığı bir uygulama yapacağız. Kullanıcı birden fazla öğrenci bilgisi girebilir. Ve sonunda tüm öğrencilerin bilgileri yansıtılır.

			List<Student> students = new List<Student>();
			while (true)
			{
				Console.Write("Ad: ");
				string isim = Console.ReadLine();
				Console.Write("Soyad: ");
				string soyad = Console.ReadLine();
				Console.Write("Numara: ");
				int numara = int.Parse(Console.ReadLine());
				Console.Write("Not: ");
				double not = double.Parse(Console.ReadLine());
				Student s = new Student(isim, soyad, numara, not);
				students.Add(s);
				string giris = Console.ReadLine();
				if (giris == "q")
				{
					break;
				}
			}

			foreach (Student student in students) {
				Console.WriteLine($"Öğrenci Adı: {student.Name}\nÖğrenci Soyadı: {student.Surname}\nÖğrenci Numarası: {student.Number}\nÖğrenci Notu: {student.Grade}\n");
				Console.WriteLine("*************");
			}
			
		}
	}

	class Student
	{
		public string Name { get; set; }
		public string Surname { get; set; }
		public int Number { get; set; }
		public double Grade { get; set; }

		public Student(string ad, string soyad, int numara, double not )
		{
			Name = ad;
			Surname = soyad;
			Grade = not;
			Number = numara;
		}
	}
}