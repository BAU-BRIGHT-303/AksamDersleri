namespace Constructorlar
{
	internal class Program
	{
		static void Main(string[] args)
		{
			//MyClass m1 = new MyClass(4);
			//MyClass m2 = new MyClass(10);
			//new MyClass();
			Console.WriteLine("Lütfen ürtimini istemiş olduğunuz aracın markasını giriniz: ");
			string marka = Console.ReadLine();

			Araba a1 = new Araba(marka);
			

		}
	}

	class MyClass
	{
		//Constructor nesneye dair konfigürasyonlar ypabileceğiniz ve nesne oluşturulurken devreye giren bir metottur.
		public MyClass()
		{
			Console.WriteLine("Boş parametreli constructor");	
		}

		public MyClass(int a)
		{
			Console.WriteLine("Bir adet myclass nesnesi üretilmiştir. Parametresi: " + a);
		}
	}

	class Araba
	{
		public Araba(string marka)
		{
			Console.WriteLine(marka+ " markalı araba üretilmiştir.");
		}

		
	}
}