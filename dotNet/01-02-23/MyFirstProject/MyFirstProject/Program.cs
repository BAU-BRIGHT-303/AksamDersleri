namespace MyFirstProject
{
	//İlk yorum satırı
	/*
	 Çoklu
	Satırda
	Yorum 
	Kullanımı
	 */
	internal class Program
	{
		static void Main(string[] args)
		{
			//Console sınıfından kullanmış olduğumuz ilk metot WriteLine metodu olup çalışma şekli parantezler içerisindeki dataları ya da string ifadeleri ya da herhangi bir değişkeni konsole yazmak üzerinedir. 
			//Console.WriteLine("Hello, World!");
			//Console.WriteLine("303 Sınıfına Hoşgeldiniz.");
			// ctrl + d tuşu ile üstte yazan kodu alta kopyalayabiliyoruz.
			//Console.WriteLine("303 Sınıfına Hoşgeldiniz.");
			//Console.ReadKey();
			//string name;

			//Console.WriteLine("Merhaba Adınız Nedir");
			//name = Console.ReadLine();
			
			//Console.WriteLine("Merhaba Yaşınız Nedir");
			//string yas = Console.ReadLine();
			//Console.WriteLine("Adınız: " + name + " " +"Yaşınız: " + yas);

			//Kullanıcının adı soyadı yaşı mail bilgisini tutan ve bunları ekrana yazdıran bir konsol uygulaması yazalım.

			Console.WriteLine("Merhaba lütfen bilgileri doğru şekilde giriniz");
			Console.WriteLine("***********");
			Console.Write("Lütfen Adınızı Giriniz: ");
			string name = Console.ReadLine();
			Console.Write("Lütfen Soyadınızı Giriniz: ");
			string surname = Console.ReadLine();
			Console.Write("Lütfen Yaşınızı Giriniz: ");
			int yas = int.Parse(Console.ReadLine());
			Console.Write("Lütfen Mailinizi Giriniz: ");
			string mail = Console.ReadLine();

			Console.WriteLine("*********************");
			Console.WriteLine($"Adınız: {name}\nSoyadınız: {surname}\nYaşınız: {yas}\nMail Adresiniz: {mail}");

		}
	}
}