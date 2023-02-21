namespace Classlar_Yapisi
{
	class MyClass
	{
		public int x;
		public string y;
	}
	internal class Program
	{
		static void Main(string[] args)
		{
			/*Class tanımlaması yapılırken 3 farklı yerde oluşturabiliyoruz. Namespace içerisinde, namespace dışarısında ve namespaceden bağımsız olarak class içerisinde de (nested) oluşturulabilir.  */
			//OrnekClass r1 = new OrnekClass();
			//r1.a = 5;

			//MyClass m1 = new MyClass(); // Şuanda Bir Nesne Oluşturduk.
			//m1.x = 5;
			//m1.y = "asdf";

			//Console.WriteLine(m1.x);

			//MyClass2 m2 = new MyClass2();
			//m2.Yas = 50;
			//Console.WriteLine(m2.Yas);

			Banka b1 = new Banka();
			Console.WriteLine(b1.Bakiye);
			b1.Bakiye = 800;
			Console.WriteLine(b1.Bakiye);
		}
	}

	class OrnekClass
	{
		public int a;
		int b;

		public void X()
		{

		}

		public int Y()
		{
			return a * b;
		}

	}


	class MyClass2
	{
		int yas;
		string soyadi;

		public int Yas
		{
			get
			{
				//Property üzerinden değer talep edildiğinde bu alan çalışacaktır.
				return yas/2;
			}
			set
			{
				//Atama yapılacağı zaman ise bu alan devreye giriyor olacaktır. 
				yas= value;
			}
		}

		//Kullanıcının bakiyesi 200'TLden büyük olduğunda bakiyenin 20 katını gösteren; 200 TL'nin altında olduğunda 1000 TL olarak gösteren; atama yapıldığında gelen değer 100 TLden küçükse bakiyeyle eşitleyen, büyükse gelen değerinde yüzde 5'ine eşitleyen bir class oluşturalım.
	}

	class Banka
	{
		int bakiye = 200;

		public int Bakiye
		{
			get
			{
				if(bakiye > 200)
				{
					return bakiye * 20;
				}
				return 1000;
			}
			set
			{
				if(value < 1000)
				{
					bakiye = value;
				}
				else
				{
					bakiye = value * 5 / 100;
				}
				
			}
		}
	}


}